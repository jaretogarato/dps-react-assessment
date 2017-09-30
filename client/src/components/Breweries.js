import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { getBreweries } from '../actions/breweries';
import { Container, Header, Segment, Divider, Grid, Image, Card } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';

class Breweries extends Component {
  state = { category: '' }; // first 2 will be arrays of objects

  componentDidMount() {
    this.props.dispatch(getBreweries(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  breweries = () => {
    const breweries = this.props;
    console.log(`breweries: ${breweries}`);
    // const { category } = this.state;
    // let visible = breweries;
    // if(category)
    //   visible = breweries.filter( brewery => brewery.category === category)

    // return breweries.map( brewery => {
    //   return(
    //     <Grid.Column key={brewery.id} computer={4} mobile={16} tablet={16}>
    //       <Card style={styles.breweryCard}>
    //         {/* <Image fluid={true} src={brewery.logo} /> */}
    //         <Card.Content>
    //           <Card.Header>{brewery.name}</Card.Header>
    //           <Card.Meta>
    //             <span>Author: {brewery.author}</span>
    //             <span>Category: {brewery.category}</span>
    //           </Card.Meta>
    //           <Card.Description style={styles.breweryDesc}>
    //             {brewery.description}
    //           </Card.Description>
    //         </Card.Content>
    //         <Card.Content extra>
    //           <Link to={`/all_breweries/${brewery.id}`}>View Brewery</Link>
    //         </Card.Content>
    //       </Card>
    //     </Grid.Column>
    //   )
    // })
  }

  render() {
    // let { category } = this.state;
    return(
      <Container>
        <Header as='h3' textAlign='center'>Exceptional Breweries</Header>
        {/* <Dropdown
          placeholder='Filter Apps By Category'
          fluid
          selection
          options={this.categoryOptions()}
          value={category}
          onChange={ (e, data) => this.setState({ category: data.value })}
        /> */}
        {/* { category && <Button fluid basic onClick={this.clearFilter}>Clear Filter</Button> } */}
        <Grid columns={16}>
          <Grid.Row>
            { this.breweries() }
          </Grid.Row>
        </Grid>
      </Container>
    )
  }

  // render(){
  //   let loaded = this.state.loaded;
  //
  //   if(loaded){
  //     return(
  //       <div>
  //         {/* <p>{ this.getBreweryImages() }</p> */}
  //         <p> In Main Return of Breweries.js </p>
  //       </div>
  //     )
  //   } else {
  //     return(
  //       <div>
  //         <h1>Loading...</h1>
  //       </div>
  //     )
  //   }
  // }

  //     let listLength = this.state.breweries.length;
  //
  //     let breweriesArr = []; // will be array of objects
  //     let breweryImageArr = []; // will be array of objects
  //     let breweryImageMed = ""; // will be a url
  //     let breweryImages = {}; // will be object of all image sizes
  //
  //     for(let i=0; i<listLength; i++){
  //       let brewery = this.state.breweries[i]; // gets big fat brewery object
  //       breweriesArr[i] = brewery; // puts big fat object in array
  //
  //       if (typeof this.state.breweries[i].images != 'undefined') {
  //         breweryImages = this.state.breweries[i].images; // usually gets object, protecting against undefined
  //       } else {
  //         breweryImages = { "medium": "http://surlybrewing.com/content/uploads/2014/09/surly-old-brewery-picture.jpg"};
  //       }
  //
  //       breweryImageArr[i] = breweryImages; // object into array
  //       console.log(`Brewery Image From Array: ${breweryImageArr[i].medium}`) // fuggyeah
  //     }
  //     console.log('vvvv breweryImageArr vvvv');
  //     console.log(breweryImageArr); // an array of objects
  //     console.log('do i have a breweries in state?');
  //     console.log(this.state.breweries); // yep, as expected
  //     console.log('do ia have a breweryImages in state?')
  //     console.log(this.state.breweryImages); // nope
  //
  //     return(
  //       <Container>
  //         <Header style={styles.header}> Exceptional Breweries </Header>
  //         <Grid>
  //           <Grid.Row>
  //             <Grid.Column width={16}>
  //               <Card.Group>
  //                 { breweriesArr.map(( brewery, index ) => {
  //                   return(
  //                     <Card>
  //                       { console.log( `Brewery image obj ->-> : ${this.state.breweryImages[index]}` ) }
  //                       <Image src={ this.state.breweryImageArr[index].medium } />
  //                       <Card.Content>
  //                         <Card.Header textAlign='center' style={styles.header4}>
  //                           { brewery.name }
  //                         </Card.Header>
  //                         <Card.Meta>{ brewery.website }</Card.Meta>
  //                         <Card.Description>
  //                           <LinesEllipsis
  //                             text={ brewery.description }
  //                             maxLine='8'
  //                             ellipsis='...'
  //                             trimRight
  //                             basedOn='letters'
  //                           />
  //                         </Card.Description>
  //                       </Card.Content>
  //                     </Card>
  //                   )
  //                 }) }
  //               </Card.Group>
  //             </Grid.Column>
  //           </Grid.Row>
  //         </Grid>
  //       </Container>
  //     )
  //   } else {
  //     return(
  //       <div>
  //         <h1>Loading...</h1>
  //       </div>
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
  breweryCard: {
    height: '300px',
    marginBottom: '10px'
  },
  breweryDesc: {
    lineHeight: 5,
  }
}

const mapStateToProps = (state) => {
  const breweries = state.breweries;
  const loaded = state.loaded;
  // const categories = [ ...new Set(brewerys.map(brewery => brewery.category))]
  return { breweries, loaded };
}

export default connect(mapStateToProps)(Breweries);
