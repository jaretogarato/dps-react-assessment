import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import GetBeers from './GetBeers';
import Beers from './Beers';
import GetBreweries from './GetBreweries';
import Breweries from './Breweries';
import Beer from './Beer';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import beerBackground from '../images/beer-background.jpg';


class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/beers' component={GetBeers} />
          <Route path='/beer' component={Beer} />
          <Route path='/breweries' component={GetBreweries} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: '#454545',
    backgroundImage: `url(${beerBackground})`,
    flex: 1,
    resizeMode: 'contain',
  },
}

export default App;
