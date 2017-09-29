import React, { Component } from 'react';
import axios from 'axios';
import { Container, Header, Segment, Divider, Grid, Image, Card } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';

class Beers extends Component {
  state = { beers: [], isLoaded: false };

  componentDidMount() {
    axios.get('/api/all_beers')
      .then(res => {
        // console.log(res.data.entries);
        this.setState({ beers: res.data.entries, isLoaded: true });
      })
      .catch( error => {
        console.log(error.response);
    });
  };

  render(){
    let loaded = this.state.isLoaded;

    if(loaded){
      let listLength = this.state.beers.length;
      // let beerNameArr = [];
      // let beerDescArr = [];
      let beerArr = [];

      for(let i=0; i<listLength; i++){
        let beer = this.state.beers[i];
        console.log(beer.name);
        beerArr[i] = beer;
        // beerNameArr[i] = beer.name;
        // beerDescArr[i] = beer.description;
        // if(beer.hasOwnProperty(name)) {
        //   let beerName = beer.name;
        //   console.log(beerName);
        // }
      }

      return(
        <Container>
          <Header style={styles.header} >Tasty Beers</Header>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Card.Group>
                  { beerArr.map( beer => {
                    return(
                      <Card>
                        <Image src='https://ichef.bbci.co.uk/images/ic/720x405/p047z06c.jpg' />
                        <Card.Content>
                          <Card.Header textAlign='center' style={styles.header4}>
                            { beer.name }
                          </Card.Header>
                          <Card.Meta>Beer meta</Card.Meta>
                          <Card.Description>

                            <LinesEllipsis
                              text={ beer.description }
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
  beerDesc: {

    lineHeight: 5,
  }
}

export default Beers;
