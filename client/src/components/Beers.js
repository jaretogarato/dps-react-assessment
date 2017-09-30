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
      let beerArr = [];
      let randomBeerPic = "";
      let beerImages = [
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
        let beer = this.state.beers[i];
        // console.log(beer.name);
        beerArr[i] = beer;
        // console.log(beer.style.name);
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
                        {/* { console.log(randomBeerPic) } */}
                        <Image src={ randomBeerPic = beerImages[Math.floor(Math.random() * beerImages.length)] } />
                        <Card.Content>
                          <Card.Header textAlign='center' style={styles.header4}>
                            { beer.name }
                          </Card.Header>
                          <Card.Meta>{ beer.style.name }</Card.Meta>
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
