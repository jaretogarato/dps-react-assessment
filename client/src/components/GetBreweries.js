import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
// import axios from 'axios';
import Breweries from './Breweries';
import { getBreweries } from '../actions/breweries';
import { Container, Header, Segment, Divider,
  Grid, Image, Card, Dimmer, Loader } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';

class GetBreweries extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    this.props.dispatch(getBreweries(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  // getBreweryImages = () => {
  //   return this.props.breweries.map( (entries)  => {
  //     return [entries]
  //   })
  // }

  render(){
    let { loaded } = this.state;
    if(loaded){
      return(
        <div>
          <h1> In Main Return in GetBreweries </h1>
          <h1> --------- </h1>
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

  // render() {
  //   let { loaded } = this.state;
  //   if (loaded) {
  //     return (
  //       <div>
  //         <Route exact path="/apps" component={Apps} />
  //         <Route exact path="/apps/:id" component={AppView} />
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <Segment>
  //         <Dimmer active>
  //           <Loader />
  //         </Dimmer>
  //       </Segment>
  //     )
  //   }
  // }
}

const styles = {
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#DDD',
    fontSize: 32,
    paddingTop: 15,
  },
  H4: {
    color: '#FFFFFF',
  },
  header4: {
    color: '#333',
  },
  breweryDesc: {
    lineHeight: 5,
  }
}

// const mapStateToProps = (state) => {
//   const breweries = state.breweries;
//   // const loaded = state.loaded;
//   // const categories = [ ...new Set(apps.map(app => app.category))]
//   return { breweries };
// }

// export default connect(mapStateToProps)(GetBreweries);
export default connect()(GetBreweries);
