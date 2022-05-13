import './App.css';
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import CountryDetails from './components/CountryDetails.jsx';
import Form from './components/Form.jsx'
import React from 'react';
import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  return (
  <React.Fragment>
    <NavBar />
    <Route exact path='/' component={LandingPage} />
    <Route path='/home/:page' component={Home} />
    <Route path='/countries/:id' component={CountryDetails} />
    <Route path='/form' component={Form} />
  </React.Fragment>
  );
}

export default App;
