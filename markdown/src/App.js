import React, {useState} from 'react';
import './App.css';
import marked from 'marked';
import ReactMarkdown from "react-markdown";

export default function App() {
    const [markDown, setMarkDown] = useState('# sup');

    function handleChange(event) {
        setMarkDown(event.target.value)
    }

    return (
    <div className="app">
      <textarea onChange={handleChange} value={markDown}/>
{/*
        <div className="preview" dangerouslySetInnerHTML={{__html: marked(markDown)}}/>*/}
        <ReactMarkdown className="preview" source={markDown}/>
    </div>
  );
}
