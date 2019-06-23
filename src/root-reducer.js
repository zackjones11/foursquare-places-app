import { combineReducers } from 'redux'

import foursquare from './redux/foursquare-redux'
import geolocation from './redux/geolocation-redux'

export default combineReducers({
    foursquare,
    geolocation
})