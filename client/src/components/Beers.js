import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getBeers } from '../actions/beers';
import { Container, Header, Segment, Divider, Grid, Image, Card } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';

class Beers extends Component {
  state = { is_organic: '' };

  beers = () => {
    const { beers = {} } = this.props;
    // const { is_organic } = this.state;
    console.log(beers);
    let visible = beers;

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

    return visible.map( beer => {
      let { id, name, description, is_organic } = beer;

      return(
        <Grid.Column key={beer.id} computer={4} mobile={16} tablet={16}>
          <Card style={styles.beerCard}>
            <Card.Content>
              <Card.Header style={styles.beerCardHeader}>{beer.name}</Card.Header>
            </Card.Content>
            <Image fluid={true} src={ randomBeerPic = beerImages[Math.floor(Math.random() * beerImages.length)] } style={styles.beerImage} />
            <Card.Content>
              <Card.Description>
                <LinesEllipsis
                  text={beer.description}
                  maxLine='6'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                />
              </Card.Description>
              <Card.Meta style={styles.cardMeta}>{ beer.style.name }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Link to={`/beer/${beer.name}`}>View Beer</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    })
  }

  render() {
    // let { is_organic } = this.state;
    return(
      <Container>
        <Header as='h1' textAlign='center' style={styles.h1}>Exceptional Beers</Header>
        {/* <Dropdown
          placeholder='Filter Apps By Category' fluid selection
          options={this.categoryOptions()} value={category}
          onChange={ (e, data) => this.setState({ category: data.value })}
        /> */}
        {/* { category && <Button fluid basic onClick={this.clearFilter}>Clear Filter</Button> } */}
        <Grid columns={16}>
          <Grid.Row>
            { this.beers() }
          </Grid.Row>
        </Grid>
      </Container>
    )
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
  h1: {
    color: '#FFF',
    paddingTop: '30px',
    paddingBottom: '30px',
    fontSize: '2.5em',
  },
  H4: {
    color: '#FFF',
  },
  header4: {
    color: '#333',
  },
  beerCard: {
    // height: '600px',
    marginBottom: '70px',
  },
  beerCardHeader: {
    height: '100px',
    padding: '5%',
    backgroundColor: '#59eff4',
    borderRadius: '10px',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#140068',
    fontSize: '1.5em',
    position: 'relative',
    top: '-20%',
    transform: 'translateY(-20%)',
  },
  beerImage: {
    height: '200px',
    // position: 'relative',
    // top: '50%',
    // transform: 'translateY(-50%)',
  },
  beerDesc: {
    height: '200px',
    lineHeight: 1.5,
  },
  cardMeta: {
    color: '#eb2f00',
  },
}

const mapStateToProps = (state) => {
  const beers = state.beers;
  const is_organic = [ ...new Set(beers.map(beer => beer.is_organic))]
  return { beers, is_organic };
}

export default connect(mapStateToProps)(Beers);
