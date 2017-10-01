import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBreweries } from '../actions/breweries';
import { Container, Header, Segment, Divider, Grid, Image, Card } from 'semantic-ui-react';
import LinesEllipsis from 'react-lines-ellipsis';

class Breweries extends Component {
  state = { is_organic: '' };

  breweries = () => {
    // console.log(this.props); // ok, we've got the data

    const { breweries = {} } = this.props;
    // console.log(`breweries: ${breweries}`);
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

    // for(let key in entries) {
    // if(entries.hasOwnProperty(key)) {
    //     var brewery = entries[key];
    //     console.log(brewery);
    //   }
    // }

    let ready = [];
    ready = visible.map( function(brewery)
      { if (typeof brewery.images != 'undefined'){
          console.log('got images'); // no need for second-level check; whenever we get images, we get a square_medium
          return brewery;
        } else {
          brewery['images'] = {"square_medium": "http://surlybrewing.com/content/uploads/2014/09/surly-old-brewery-picture.jpg"};
          return brewery;
        }
      }
    )

    return ready.map( brewery => {
      // if (typeof brewery.images != 'undefined'){
      //   console.log('got images'); // no need for second-level check; whenever we get images, we get a square_medium
      // } else {
      //   brewery[images] = {"square_medium": "http://surlybrewing.com/content/uploads/2014/09/surly-old-brewery-picture.jpg"};
      // }
      // console.log(brewery.images.square_medium);
      let { id, name, description, is_organic, images = {}, website } = brewery;

      return(
        <Grid.Column key={brewery.id} computer={4} mobile={16} tablet={16}>
          <Card style={styles.breweryCard}>
            <Image fluid={true} src={brewery.images.square_medium} />
            <Card.Content>
              <Card.Header>{brewery.name}</Card.Header>
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
    // let { category } = this.state;
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
                          // <Card.Description>
                          //   <LinesEllipsis
                          //     text={ brewery.description }
                          //     maxLine='8'
                          //     ellipsis='...'
                          //     trimRight
                          //     basedOn='letters'
                          //   />
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
    height: '300px',
    marginBottom: '10px',
  },
  breweryDesc: {
    lineHeight: 1.5,

  }
}

const mapStateToProps = (state) => {
  const breweries = state.breweries;
  const is_organic = [ ...new Set(breweries.map(brewery => brewery.is_organic))]
  return { breweries, is_organic };
}

export default connect(mapStateToProps)(Breweries);
