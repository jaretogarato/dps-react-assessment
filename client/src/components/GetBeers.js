import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
// import axios from 'axios';
import Beers from './Beers';
import { getBeers } from '../actions/beers';
import { Container, Header, Segment, Divider,
  Grid, Image, Card, Dimmer, Loader } from 'semantic-ui-react';

class GetBeers extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    this.props.dispatch(getBeers(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render(){
    let { loaded } = this.state;
    if(loaded){
      return(
        <div>
          {/* <h1> In Main Return in GetBeers </h1>
          <h1> --------- </h1> */}
          <Route exact path="/beers" component={Beers} />
          {/* <Route exact path="/beer/:name" component={Beers} /> */}
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(GetBeers);
