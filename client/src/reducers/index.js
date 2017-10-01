import { combineReducers } from 'redux'
import flash from './flash'
import breweries from './breweries'
import beers from './beers'

const rootReducer = combineReducers({
  flash,
  beers,
  breweries,
})

export default rootReducer
