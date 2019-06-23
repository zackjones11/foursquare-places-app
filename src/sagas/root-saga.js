import { all, takeLatest } from 'redux-saga/effects'

import * as foursquare from '../redux/foursquare-redux'

import { fetchVenues } from './foursquare-saga'

export default function* rootSaga() {
    yield all([
        takeLatest(foursquare.FETCH_VENUES, fetchVenues)
    ])
}