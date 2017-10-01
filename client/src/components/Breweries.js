import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getBreweries } from '../actions/breweries';
import { Container, Header, Segment, Divider, Grid, Image, Card } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';

class Breweries extends Component {
  state = { is_organic: '' };

  breweries = () => {
    const { breweries = {} } = this.props;
    console.log(`breweries: ${breweries}`);
    const { is_organic } = this.state;
    //let breweries = breweriesParent.entries || [];
    let visible = breweries;

    // { visible.entries.map( brew => {
    //   let { id, name, description, images = {}, website } = brew;
    //   return (
    //     <Grid.Column computer={8} tablet={16} mobile={16} key={id}>
    // ^^^^^^^^^^^^^^^ from dave's slack
    // if(is_organic)
    //   visible = breweries.filter( brewery => brewery.is_organic === is_organic)
    // visible = breweries.filter( brewery => brewery.is_organic === brewery.is_organic)

    let ready = [];
    ready = visible.map( function(brewery)
      { if (typeof brewery.images == 'undefined'){
          brewery['images'] = {"square_medium": "https://static1.squarespace.com/static/54ee3381e4b09da43c2f9eba/563d5c94e4b040c6b75fb8b7/564b565ce4b0d5cebc06787e/1447777889413/5Rabbit34.jpg?format=500w"};
        }
      return brewery;
      }
    )

    return ready.map( brewery => {
      let { id, name, description, is_organic, images = {}, website } = brewery;

      return(
        <Grid.Column key={brewery.id} computer={4} mobile={16} tablet={16}>
          <Card style={styles.breweryCard}>
            <Card.Content>
              <Card.Header style={styles.breweryCardHeader}>{brewery.name}</Card.Header>
            </Card.Content>
            <Image fluid={true} src={brewery.images.square_medium} style={styles.breweryImage} />
            <Card.Content>
              <Card.Description>
                <LinesEllipsis
                  text={brewery.description}
                  maxLine='8'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                />
              </Card.Description>
              <Card.Meta>
                <span>{brewery.website}</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Link to={`/all_breweries/${brewery.id}`}>View Brewery</Link>
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
        <Header as='h1' textAlign='center' style={styles.h1}>Exceptional Breweries</Header>
        {/* <Dropdown
          placeholder='Filter Apps By Category' fluid selection
          options={this.categoryOptions()} value={category}
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
  breweryCard: {
    // height: '600px',
    marginBottom: '70px',
  },
  breweryCardHeader: {
    height: '100px',
    padding: '5%',
    backgroundColor: '#4abddc',
    borderRadius: '10px',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#140068',
    fontSize: '1.5em',
    position: 'relative',
    top: '-20%',
    transform: 'translateY(-20%)',
  },
  breweryImage: {
    height: '200px',
    // position: 'relative',
    // top: '50%',
    // transform: 'translateY(-50%)',
  },
  breweryDesc: {
    height: '200px',
    lineHeight: 1.5,
  },
}

const mapStateToProps = (state) => {
  const breweries = state.breweries;
  const is_organic = [ ...new Set(breweries.map(brewery => brewery.is_organic))]
  return { breweries, is_organic };
}

export default connect(mapStateToProps)(Breweries);
