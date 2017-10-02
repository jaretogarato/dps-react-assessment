import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getBeers } from '../actions/beers';
import { Container, Header, Segment, Table, Grid, Image, Card } from 'semantic-ui-react';

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

const Beer = ({ beer = {} }) => (

  <Container>
    <Link to="/beers">View All Beers</Link>
    <Header as="h1" textAlign="center">
      {beer.name}
    </Header>
    <Image
      fluid={true}
      src={ randomBeerPic = beerImages[Math.floor(Math.random() * beerImages.length)] }
    />
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>table header 1</Table.HeaderCell>
          <Table.HeaderCell>table header 2</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{beer.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Version</Table.Cell>
          <Table.Cell>{beer.is_organic}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>ABV</Table.Cell>
          <Table.Cell>{beer.abv}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { beer: state.beers.find( b => b.name === props.match.params.beer ) }
}

export default connect(mapStateToProps)(Beer);

// class Beer extends Component {
//
//   beer = () => {
//     const { beers = {} } = this.props;
//     // const { is_organic } = this.state;
//     const { beer = {} } = beers;
//     console.log(beer);
//
//     let randomBeerPic = "";
//     let beerImages = [
//       "http://cdn0.wideopencountry.com/wp-content/uploads/2017/04/beer-793x526.jpg",
//       "https://ichef.bbci.co.uk/images/ic/720x405/p047z06c.jpg",
//       "https://cdn.static-economist.com/sites/default/files/images/2017/07/articles/main/20170708_wbp502.jpg",
//       "https://www.maxim.com/.image/t_share/MTQ2ODUxNjY1ODIyMDk4OTgw/two-pints-beer-main.jpg",
//       "http://texasbeerbus.com/wp-content/uploads/2016/06/bar-1-1.jpg",
//       "http://johnyskystories.com/uploads/attachments/20170428213423_beer-main_0.jpg",
//       "http://www.drinkstuff.com/productimg/65868.jpg",
//       "http://mediad.publicbroadcasting.net/p/krcu/files/201604/beer_10.jpg",
//       "http://pngimg.com/uploads/beer/beer_PNG2388.png?i=1"
//     ]
//
//     return(
//       <div>
//         <Grid.Column computer={4} mobile={1} tablet={1}></Grid.Column>
//         <Grid.Column key={beer.id} computer={8} mobile={14} tablet={14}>
//           <Segment>{beer.name}</Segment>
//           <Segment>
//             <Image
//               fluid={true}
//               src={ randomBeerPic = beerImages[Math.floor(Math.random() * beerImages.length)] }
//             />
//           </Segment>
//           <Segment>
//             {beer.description}
//           </Segment>
//           <Segment>
//             {beer.style.name}
//           </Segment>
//         </Grid.Column>
//         <Grid.Column computer={4} mobile={1} tablet={1}></Grid.Column>
//       </div>
//     )
//   }
//
//   render() {
//     return(
//       <Container>
//         <Header as='h1' textAlign='center' style={styles.h1}>{beer.name}</Header>
//         <Grid columns={16}>
//           <Grid.Row>
//             { this.beer() }
//           </Grid.Row>
//         </Grid>
//       </Container>
//     )
//   }
// }
//
// const styles = {
//   centered: {
//     margin: '0 auto',
//   },
//   header: {
//     color: '#DDD',
//     fontSize: 32,
//     paddingTop: 15,
//   },
//   h1: {
//     color: '#FFF',
//     paddingTop: '30px',
//     paddingBottom: '30px',
//     fontSize: '2.5em',
//   },
//   H4: {
//     color: '#FFF',
//   },
//   header4: {
//     color: '#333',
//   },
//   beerCard: {
//     // height: '600px',
//     marginBottom: '70px',
//   },
//   beerCardHeader: {
//     height: '100px',
//     padding: '5%',
//     backgroundColor: '#59eff4',
//     borderRadius: '10px',
//     textAlign: 'center',
//     verticalAlign: 'middle',
//     color: '#140068',
//     fontSize: '1.5em',
//     position: 'relative',
//     top: '-20%',
//     transform: 'translateY(-20%)',
//   },
//   beerImage: {
//     height: '200px',
//     // position: 'relative',
//     // top: '50%',
//     // transform: 'translateY(-50%)',
//   },
//   beerDesc: {
//     height: '200px',
//     lineHeight: 1.5,
//   },
//   cardMeta: {
//     color: '#eb2f00',
//   },
// }
//
// const mapStateToProps = (state) => {
//   const beer = state.beer;
//   const is_organic = [ ...new Set(beers.map(beer => beer.is_organic))]
//   return { beer, is_organic };
// }
//
// export default connect(mapStateToProps)(Beer);
