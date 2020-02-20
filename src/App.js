import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import AskAnExpertPage from './routes/AskAnExpertPage';
import FormPage from './routes/FormPage';


class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact path='/'
            render={(routeProps) => (<LandingPage {...routeProps}{...this.props} />)}
          />
          <Route
            exact path='/ask-an-expert'
            render={(routeProps) => (<AskAnExpertPage {...routeProps}{...this.props} />)}
          />
          <Route
            exact path='/form'
            render={(routeProps) => (<FormPage {...routeProps}{...this.props} />)}
          />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
