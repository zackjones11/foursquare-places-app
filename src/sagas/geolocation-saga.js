import * as sagaFx from 'redux-saga/effects'

import * as redux from '../redux/geolocation-redux'
import * as services from '../services'

export function* fetchGeoLocation() {
    yield sagaFx.put({ type: redux.FETCH_GEO_LOCATION_REQUEST })
    
    const { data, error } = yield sagaFx.call(services.fetchGeoLocation)

    if (error) {
        return yield sagaFx.put({ type: redux.FETCH_GEO_LOCATION_FAILURE, error })
    }

    if (data) {
        return yield sagaFx.put({ type: redux.FETCH_GEO_LOCATION_SUCCESS, payload: data })
    }
}