import './App.css';
import Home from './components/Home/Home.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import CountryDetails from './components/CountryDetails/CountryDetails.jsx';
import Form from './components/Form/Form.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import React from 'react';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
  <React.Fragment>
    <Switch>
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route>
        <NavBar />
        <Switch>
          <Route exact path='/home'>
            <SearchBar />
            <Home />
          </Route>
          <Route path='/countries/:id'>
            <CountryDetails />
          </Route>
          <Route exact path='/form'>
            <Form />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Route>
    </Switch>
  </React.Fragment>
  );
}

export default App;
