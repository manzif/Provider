import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from "./views/LandingPage"
import Message from "./components/message/Message"
import About from "./components/about/About"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/message" exact component={Message} />
            <Route path="/about" exact component={About} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
