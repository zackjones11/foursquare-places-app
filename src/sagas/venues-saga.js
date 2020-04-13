import * as sagaFx from 'redux-saga/effects'

import * as redux from '../redux/venues-redux'
import * as services from '../services'

export function* fetchVenues({ payload }) {
    yield sagaFx.put({ type: redux.FETCH_VENUES_REQUEST, payload: {
        incrementPageNum: payload.incrementPageNum ? payload.incrementPageNum : false
    }})
    
    const { data: {response}, error } = yield sagaFx.call(services.fetchVenues, payload)

    if (error) {
        return yield sagaFx.put({ type: redux.FETCH_VENUES_FAILURE, error })
    }

    if (response) {
        const recommended = response.groups.filter((group) => group.name === 'recommended')
        const venues = recommended[0].items

        if (!venues.length) {
            return yield sagaFx.put({ type: redux.FETCH_VENUES_NO_RESULTS })
        }

        return yield sagaFx.put({ type: redux.FETCH_VENUES_SUCCESS, payload: {
            venues, 
            incrementPageNum: payload.incrementPageNum ? payload.incrementPageNum : false
        } })
    }
}