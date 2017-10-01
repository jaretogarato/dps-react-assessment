import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
// import axios from 'axios';
import Breweries from './Breweries';
import { getBreweries } from '../actions/breweries';
import { Container, Header, Segment, Divider,
  Grid, Image, Card, Dimmer, Loader } from 'semantic-ui-react';

class GetBreweries extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    this.props.dispatch(getBreweries(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render(){
    let { loaded } = this.state;
    if(loaded){
      return(
        <div>
          {/* <h1> In Main Return in GetBreweries </h1>
          <h1> --------- </h1> */}
          <Route exact path="/breweries" component={Breweries} />
          {/* <Route exact path="/brewery/:name" component={Breweries} /> */}
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

export default connect()(GetBreweries);
