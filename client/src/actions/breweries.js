import axios from 'axios';

export const getBreweries = (callback) => {
  // this is a thunk:
  return(dispatch) => {
    axios.get('/api/all_breweries')
      .then( res => dispatch({ type: 'BREWERIES', breweries: res.data.entries }))
      .then( callback() )
  }
}
