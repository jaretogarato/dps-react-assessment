import React, { Component } from 'react';
import axios from 'axios';
import { Container, Header, Segment, Divider, Grid, Image, Card } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';

class Breweries extends Component {
  state = { breweries: [], isLoaded: false };

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => {
        // console.log(res.data.entries);
        this.setState({ breweries: res.data.entries, isLoaded: true });
      })
      .catch( error => {
        console.log(error.response);
    });
  };

  render(){
    let loaded = this.state.isLoaded;

    if(loaded){
      let listLength = this.state.breweries.length;
      let breweriesArr = [];
      let randomBeerPic = "";
      let breweryImages = [
        "http://cdn0.wideopencountry.com/wp-content/uploads/2017/04/beer-793x526.jpg",
        "https://ichef.bbci.co.uk/images/ic/720x405/p047z06c.jpg",
        "https://cdn.static-economist.com/sites/default/files/images/2017/07/articles/main/20170708_wbp502.jpg",
        "https://www.maxim.com/.image/t_share/MTQ2ODUxNjY1ODIyMDk4OTgw/two-pints-beer-main.jpg",
        "http://texasbeerbus.com/wp-content/uploads/2016/06/bar-1-1.jpg",
        "http://johnyskystories.com/uploads/attachments/20170428213423_beer-main_0.jpg",
        "http://www.drinkstuff.com/productimg/65868.jpg",
        "http://mediad.publicbroadcasting.net/p/krcu/files/201604/beer_10.jpg",
        "http://pngimg.com/uploads/beer/beer_PNG2388.png?i=1"
      ]

      for(let i=0; i<listLength; i++){
        let brewery = this.state.breweries[i];
        // console.log(brewery.name);
        breweriesArr[i] = brewery;
        // console.log(brewery.style.name);
        // if(brewery.hasOwnProperty(name)) {
        //   let breweryName = brewery.name;
        //   console.log(breweryName);
        // }
      }

      return(
        <Container>
          <Header style={styles.header} >Exceptional Breweries</Header>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Card.Group>
                  { breweriesArr.map( brewery => {
                    return(
                      <Card>
                        {/* { console.log(randomBeerPic) } */}
                        {/* <Image src={ randomBeerPic = breweryImages[Math.floor(Math.random() * breweryImages.length)] } /> */}
                        <Image src={ brewery.images } />
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
