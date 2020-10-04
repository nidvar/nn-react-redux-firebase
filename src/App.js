import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProjects from './components/projects/CreateProjects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path='/' component ={Dashboard} />
          <Route path='/project/:id' component = {ProjectDetails} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/createproject' component={CreateProjects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;