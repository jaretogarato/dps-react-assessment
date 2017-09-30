import React, { Component } from 'react';
import axios from 'axios';
import { Container, Header, Segment, Divider, Grid, Image, Card } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';

class Breweries extends Component {
  state = { breweries: [], breweryImages: {}, isLoaded: false }; // first will be array of objects

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => {
        // console.log(res.data.entries);
        this.setState({
          // vvvvvvv vvvvvvv vvvvvvv vvvvvvv vvvvv
          breweries: res.data.entries, // this is an array
          breweryImages:res.data.entries.images, // this is an object
          isLoaded: true });
          // ^^^^^^^^^^^^^ ^^^^^^^^^^ ^^^^^^^^^^^^^
      })
      .catch( error => {
        console.log(error.response);
    });
  };

  render(){
    let loaded = this.state.isLoaded;

    if(loaded){
      let listLength = this.state.breweries.length;

      let breweriesArr = []; // will be array of objects
      let breweryImageArr = []; // will be array of objects?
      let breweryImageMed = ""; // will be a url

      for(let i=0; i<listLength; i++){
        let brewery = this.state.breweries[i]; // gets big fat brewery object
        breweriesArr[i] = brewery; // puts big fat object in array
        // console.log(brewery);

        let breweryImages = this.state.breweries[i].images; // should get an object
        console.log('vvv this.state.breweries[i].images vvv');
        console.log(this.state.breweries[i].images ); // yep, got the object
        breweryImageArr[i] = breweryImages;
        console.log(`Brewery Image From Array: ${breweryImages.medium}`) // fuggyeah
        console.log(`Brewery Image From Array II: ${breweryImageArr[i].medium}`) // fuggyeah

        // if(brewery.hasOwnProperty(name)) {
        //   let breweryName = brewery.name;
        // }
      }
      console.log('what is breweryImageArr now?');
      console.log(breweryImageArr); // an array of objects at this point.

      this.setState({ breweries: breweriesArr, breweryImages: breweryImageArr });

      console.log('do i have a breweries?');
      console.log(this.state.breweries); // yep, as expected, and array of objects
      console.log('do ia have a breweryImages?')
      console.log(this.state.breweryImages); // nope

      return(
        <Container>
          <Header style={styles.header}> Exceptional Breweries </Header>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Card.Group>

                  {/* var list = [ 'h', 'e', 'l', 'l', 'o'];
                  list.map((currElement, index) => {
                    console.log("The current iteration is: " + index);
                    console.log("The current element is: " + currElement);
                    console.log("\n");
                    return 'X';
                  }); */}

                  { breweriesArr.map(( brewery, index ) => {
                    return(
                      <Card>
                        { console.log( `Brewery image obj ->-> : ${this.state.breweryImages[index]}` ) }
                        <Image src={ this.state.breweryImageArr[index].medium } />
                        <Card.Content>
                          <Card.Header textAlign='center' style={styles.header4}>
                            { brewery.name }
                          </Card.Header>
                          <Card.Meta>{ brewery.website }</Card.Meta>
                          <Card.Description>
                            <LinesEllipsis
                              text={ brewery.description }
                              maxLine='8'
                              ellipsis='...'
                              trimRight
                              basedOn='letters'
                            />
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    )
                  }) }
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      )
    } else {
      return(
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
  }
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

export default Breweries;