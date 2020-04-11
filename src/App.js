import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.scss';
import Main from "./pages/Main";
import Schedule from "./pages/Schedule";

class App extends React.Component {
  render(){
    return (
    <Router>
      <Route exact path="/" component={Main}/>
      <Route exact path="/schedule" component={Schedule}/>
    </Router>
    )
  };
};

export default App;
