const breweries = (state = [], action) => {
  switch(action.type) {
    case 'BREWERIES':
      return action.breweries;
    // case 'ADD_BREWERY':
    //   return [...state, action.app] //adds app to the end of array
    // case 'UPDATE_BREWERY':
    //   return state.map( brewery => {
    //     if( brewery.id === action.brewery.id )
    //       return action.brewery
    //     return app
    //   })
    // case 'DELETE_APP':
    //   return state.filter( brewery => brewery.id !== action.id )
    default:
      return state;
  }
}

export default breweries;
