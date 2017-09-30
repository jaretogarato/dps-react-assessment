import axios from 'axios';

// methods that help us dispatch actions:
// get all breweries - 'all' action of our breweries controller
// this.props.dispatch(getBreweries())

export const getBreweries = (callback) => {
  // this is a thunk:
  return(dispatch) => {
    axios.get('/api/all_breweries')
      .then( res => dispatch({ type: 'BREWERIES', breweries: res.data }))
      // .then( res => { debugger })
      // .then(res => {
      //   this.setState({
      //     breweries: res.data.entries, // this is an array
      //     breweryImages:res.data.entries.images, // this is an object
      //   });
      // })
      // .then( res => { console.log(breweries)} )
      .then( callback() )
  }
}

    // axios.get('/api/all_breweries')
    //   .then(res => {
    //     // console.log(res.data.entries);
    //     this.setState({
    //       // vvvvvvv vvvvvvv vvvvvvv vvvvvvv vvvvv
    //       breweries: res.data.entries, // this is an array
    //       breweryImages:res.data.entries.images, // this is an object
    //       isLoaded: true });
    //       console.log('vvv breweryImages from state VVV');
    //       // ^^^^^^^^^^^^^ ^^^^^^^^^^ ^^^^^^^^^^^^^
    //   })
    //   .catch( error => {
    //     console.log(error.response);
    // });
