import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import DashboardPage from './DashboardPage';
import CampagnePage from './CampagnePage';
import TestPage from './TestPage';
import CandidatPage from './CandidatPage';
import ResultPage from './ResultPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/campagne">
            <CampagnePage />
          </Route>
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/candidat">
            <CandidatPage />
          </Route>
          <Route path="/result">
            <ResultPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
