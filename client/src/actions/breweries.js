import axios from 'axios';
import { setFlash } from './flash';

// ----------- pre-pagination code -----------
export const getBreweries = (callback) => {
  // this is a thunk:
  return(dispatch) => {
    axios.get('/api/all_breweries')
      .then( res => dispatch({ type: 'BREWERIES', breweries: res.data.entries }))
      .then( callback() )
  }
}

// ------------ code for pagination ------------
// export const getBreweries = (callback) => {
//   // this is a thunk:
//   return(dispatch) => {
//     axios.get('/api/all_breweries?page=${page}')
//     // axios.get('/api/all_breweries')
//       .then( res => dispatch({
//         type: 'BREWERIES',
//         breweries: res.data.entries,
//         totalPages: res.data.total_pages,
//       }))
//       // .then(this.setState({totalPages: res.data.total_pages }))
//       .then( callback() )
//   }
// }

// ------------ from yahtzee lecture --------------
// componentDidMount() {
//     axios.get(`/api/scores?page=${this.state.page}`)
//       .then( ({ data, headers }) => {
//         this.setState({ scores: data.scores, totalPages: data.total_pages });
//         this.props.dispatch({ type: 'HEADERS', headers });
//       });
//   }
