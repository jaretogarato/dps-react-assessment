import React, { Component } from 'react';
import axios from 'axios';
import { Container, Header, Segment, Divider, Grid, Image, Card } from 'semantic-ui-react';


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
      let beerNameArr = [];

      for(let i=0; i<listLength; i++){
        let beer = this.state.beers[i];
        console.log(beer.name);
        beerNameArr[i] = beer.name;
        // if(beer.hasOwnProperty(name)) {
        //   let beerName = beer.name;
        //   console.log(beerName);
        // }
      }

      // return (
      //   <Segment basic>
      //     <Segment basic textAlign='center'>
      //       <Header as='h1' style={styles.header}>Beers Beers Beers</Header>
      //     </Segment>
      //     <Grid>
      //       <Grid.Column computer={8} tablet={8} mobile={16}>
      //         <Segment inverted>
      //           <Header
      //             as='h1'
      //             textAlign='center'
      //             style={styles.header}>
      //               50 First Beers
      //           </Header>
      //           <Divider />
      //           <Header>Beers header</Header>
      //         </Segment>
      //       </Grid.Column>
      //     </Grid>
      //   </Segment>
      // )

      return(
        <Container>
          <Header style={styles.header} >Beers Beers Beers</Header>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Card.Group>
                  { beerNameArr.map( beerName => {
                    return(
                      <Card>
                        <Image src='https://ichef.bbci.co.uk/images/ic/720x405/p047z06c.jpg' />
                        <Card.Content>
                          <Card.Header
                            textAlign='center'
                            style={styles.header4}
                          >
                            { beerName }
                          </Card.Header>
                          <Card.Meta>Beer meta</Card.Meta>
                          <Card.Description>Beer description</Card.Description>
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
  iframe: {
    width: '100%',
    height: '100vh',
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40',
  },
  H4: {
    color: '#FFFFFF',
  },
  header4: {
    color: '#333',
  }
}

export default Beers;
