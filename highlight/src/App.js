import React from 'react';
import './App.css';
import Tab from "./components/Tab";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <div className="browser">
            <div className="tabs">
              <Tab>
                <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
              </Tab>
              <Tab>
                <NavLink to="/about" activeClassName="is-active">About</NavLink>
              </Tab>
              <Tab>
                <NavLink to="/features" activeClassName="is-active">Features</NavLink>
              </Tab>
            </div>
            <div className="viewport">
              {/*exact true fix double router in one page like
                /about/feature
                Or you can add extra switch
              */}
              <Switch>
                <Route path="/" exact={true}>
                  <Home/>
                </Route>
                <Route path="/about">
                  <About/>
                </Route>
                <Route path="/features">
                  <Features/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
