import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";


function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="browser">
                    <Header/>
                    <div className="viewport">
                        {/*exact true fix double router in one page like
                /about/feature
                Or you can add extra switch
              */}
                        <Routes/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
