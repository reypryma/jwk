import React, {useState} from "react";

export default function Tab({children}) {
    const [highlightStyle, setHighlightStyle] = useState({
        left: 0
    });

    function moveHighLight(e) {
        setHighlightStyle({
            left: e.nativeEvent.layerX - 150,
        })
    }

    function hideHighLight(e) {
        setHighlightStyle({
            opacity: 0,
            left: e.nativeEvent.layerX - 150,
        })
    }

    return (
        <div className="tab" onMouseOut={hideHighLight} onMouseMove={moveHighLight}>
            <div className="highlight" style={highlightStyle}/>
            {children}
        </div>
    )
}