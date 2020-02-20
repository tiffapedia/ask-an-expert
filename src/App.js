import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import FormPage from './routes/FormPage';
import ThankYouPage from './routes/ThankYouPage';


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
            exact path='/form'
            render={(routeProps) => (<FormPage {...routeProps}{...this.props} />)}
          />
          <Route
            exact path='/thank-you'
            render={(routeProps) => (<ThankYouPage {...routeProps}{...this.props} />)}
          />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
