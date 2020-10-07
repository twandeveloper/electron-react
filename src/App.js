import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import ProtectedRoute from './auth/ProtectedRoute';

import Login from './components/Login/Login';
import Test from './components/Test';
import DashBoard from './components/UserDashboard/UserDashboard';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/test' component={Test} />
          <ProtectedRoute exact path='/dashboard' component={DashBoard} />
          <Route exact path='/' component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
