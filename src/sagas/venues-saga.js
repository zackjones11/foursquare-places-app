import * as sagaFx from 'redux-saga/effects'

import * as redux from '../redux/venues-redux'
import * as services from '../services'

export function* fetchVenues({ payload }) {
    yield sagaFx.put({ type: redux.FETCH_VENUES_REQUEST, payload: {
        incrementPageNum: payload.incrementPageNum ? payload.incrementPageNum : false
    }})
    
    const { data, error } = yield sagaFx.call(services.fetchVenues, payload)
    
    if (error) {
        return yield sagaFx.put({ type: redux.FETCH_VENUES_FAILURE, error })
    }

    if (data.response) {
        const p = {
            venues: data.response.groups, 
            incrementPageNum: payload.incrementPageNum ? payload.incrementPageNum : false
        }
        return yield sagaFx.put({ type: redux.FETCH_VENUES_SUCCESS, payload: p })
    }
}