import React, {useState} from 'react';
import './App.css';

function App() {
  const [highlightStyle, setHighlightStyle] = useState({
    left:0
  });


  function moveHighLight(e) {
    setHighlightStyle({
      left: e.nativeEvent.layerX -150,
    })
  }

  function hideHighLight(e) {
    setHighlightStyle({
      opacity:0,
      left: e.nativeEvent.layerX -150,
    })
  }

  return (
    <div className="app">
      <div className="browser">
        <div className="tabs" >
          <div className="tab"
               onMouseOut={hideHighLight}
               onMouseMove={moveHighLight}>
            <div className="highlight" style={highlightStyle}/>
            <a>Home</a>
          </div>
          <div className="tab"
               onMouseOut={hideHighLight}
               onMouseMove={moveHighLight}>
            <div className="highlight" style={highlightStyle}/>
            <a>About</a>
          </div>
          <div className="tab" onMouseOut={hideHighLight} onMouseMove={moveHighLight}>
            <div className="highlight" style={highlightStyle}/>
            <a>Features</a>
          </div>
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
