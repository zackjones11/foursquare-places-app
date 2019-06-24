import { all, takeLatest } from 'redux-saga/effects'

import * as venues from '../redux/venues-redux'
import * as geolocation from '../redux/geolocation-redux'

import { fetchVenues } from './venues-saga'
import { fetchGeoLocation } from './geolocation-saga'

export default function* rootSaga() {
    yield all([
        takeLatest(venues.FETCH_VENUES, fetchVenues),
        takeLatest(geolocation.FETCH_GEO_LOCATION, fetchGeoLocation)
    ])
}