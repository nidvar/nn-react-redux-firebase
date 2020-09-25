import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <h1>NN React Redux Firebase</h1>
        <Switch>
          <Route exact path='/' component ={Dashboard} />
          <Route path='/projects/:id' component = {ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;