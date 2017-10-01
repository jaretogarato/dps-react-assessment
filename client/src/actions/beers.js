import axios from 'axios';

export const getBeers = (callback) => {
  // this is a thunk:
  return(dispatch) => {
    axios.get('/api/all_beers')
      .then( res => dispatch({ type: 'BEERS', beers: res.data.entries }))
      .then( callback() )
  }
}
