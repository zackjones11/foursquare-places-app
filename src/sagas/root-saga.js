import { all, takeLatest } from 'redux-saga/effects'

import * as foursquare from '../redux/foursquare-redux'
import * as geolocation from '../redux/geolocation-redux'

import { fetchVenues } from './foursquare-saga'
import { fetchGeoLocation } from './geolocation-saga'

export default function* rootSaga() {
    yield all([
        takeLatest(foursquare.FETCH_VENUES, fetchVenues),
        takeLatest(geolocation.FETCH_GEO_LOCATION, fetchGeoLocation)
    ])
}