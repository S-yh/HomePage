import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>
      </Switch>
    </Router>
  );
}

export default App;
