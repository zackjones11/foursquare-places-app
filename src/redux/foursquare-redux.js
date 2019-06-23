import { combineReducers } from 'redux'

export const FETCH_VENUES = 'FETCH_VENUES'
export const FETCH_VENUES_REQUEST = 'FETCH_VENUES_REQUEST'
export const FETCH_VENUES_SUCCESS = 'FETCH_VENUES_SUCCESS'
export const FETCH_VENUES_FAILURE = 'FETCH_VENUES_FAILURE'

export const INITIAL_STATE = {
    isFetchingVenues: false,
    hasFetchedVenues: null,
    venues: [],
    error: null,
}

/**
 * Action Creators
 */
export const fetchVenues = (payload) => ({ type: FETCH_VENUES, payload: payload })

/**
 * Reducers
 */
const isFetchingVenues = (state = INITIAL_STATE.isFetchingVenues, action = {}) => {
    switch (action.type) {
        case FETCH_VENUES_SUCCESS:
        case FETCH_VENUES_FAILURE:
            return false

        case FETCH_VENUES_REQUEST:
            return true

        default:
            return state
    }
}

const hasFetchedVenues = (state = INITIAL_STATE.hasFetchedVenues, action = {}) => {
    switch (action.type) {
        case FETCH_VENUES_SUCCESS:
            return true

        case FETCH_VENUES_FAILURE:
            return false

        case FETCH_VENUES_REQUEST:
            return null

        default:
            return state
    }
}

const venues = (state = INITIAL_STATE.venues, action = {}) => {
    switch (action.type) {
        case FETCH_VENUES_SUCCESS:
            const recommended = action.payload.filter((group) =>
                group.name === 'recommended')
        
            const venues = recommended[0].items

            return venues

        case FETCH_VENUES_FAILURE:

        default:
            return state
    }
} 

const error = (state = INITIAL_STATE.error, action = {}) => {
    switch (action.type) {
        case FETCH_VENUES_SUCCESS: {
            return null
        }

        case FETCH_VENUES_FAILURE: {
            const responseError = action.error || {}
            const errorData = responseError.data || responseError

            return errorData
        }

        default:
            return state
    }
}

export default combineReducers({
    isFetchingVenues,
    hasFetchedVenues,
    venues,
    error
})