import React, {useState} from 'react';
import './App.css';
import Tab from "./components/Tab";


function App() {
  return (
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab>
              <a>Home</a>
            </Tab>
            <Tab>
              <a>Feature</a>
            </Tab>
            <Tab>
              <a>Home</a>
            </Tab>
          </div>
          <div className="viewport">Pages Go Here</div>
        </div>
      </div>
  );
}

export default App;
