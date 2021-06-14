import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './App.css'


function App() {
  return (
   <Router>
     <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />

        <Route path="/profile/:id" component={Profile} />
     </Switch>
   </Router>
  );
}

export default App;
