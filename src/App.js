import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from "./views/LandingPage"
import About from "./components/about/About"
import Language from "./components/language/Language"
import Getincontact from "./views/Getincontact"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/about" exact component={About} />
            <Route path="/getincontact" exact component={Getincontact} />
            <Route path="/language" exact component={Language} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
