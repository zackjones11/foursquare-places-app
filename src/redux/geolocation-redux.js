import { combineReducers } from 'redux'

export const FETCH_GEO_LOCATION = 'FETCH_GEO_LOCATION'
export const FETCH_GEO_LOCATION_REQUEST = 'FETCH_GEO_LOCATION_REQUEST'
export const FETCH_GEO_LOCATION_SUCCESS = 'FETCH_GEO_LOCATION_SUCCESS'
export const FETCH_GEO_LOCATION_FAILURE = 'FETCH_GEO_LOCATION_FAILURE'

export const INITIAL_STATE = {
    isFetchingLocation: false,
    hasFetchedLocation: null,
    usersLocation: {},
    error: null,
}

/**
 * Action Creators
 */
export const fetchGeoLocation = (payload) => ({ type: FETCH_GEO_LOCATION })

/**
 * Reducers
 */
const isFetchingLocation = (state = INITIAL_STATE.isFetchingLocation, action = {}) => {
    switch (action.type) {
        case FETCH_GEO_LOCATION_SUCCESS:
        case FETCH_GEO_LOCATION_FAILURE:
            return false

        case FETCH_GEO_LOCATION_REQUEST:
            return true

        default:
            return state
    }
}

const hasFetchedLocation = (state = INITIAL_STATE.hasFetchedLocation, action = {}) => {
    switch (action.type) {
        case FETCH_GEO_LOCATION_SUCCESS:
            return true

        case FETCH_GEO_LOCATION_FAILURE:
            return false

        case FETCH_GEO_LOCATION_REQUEST:
            return null

        default:
            return state
    }
}

const usersLocation = (state = INITIAL_STATE.usersLocation, action = {}) => {
    switch (action.type) {
        case FETCH_GEO_LOCATION_SUCCESS:
            return {
                lat: action.payload.latitude,
                long: action.payload.longitude
            }

        case FETCH_GEO_LOCATION_REQUEST:
        case FETCH_GEO_LOCATION_FAILURE:
            return {}

        default:
            return state
    }
} 

const error = (state = INITIAL_STATE.error, action = {}) => {
    switch (action.type) {
        case FETCH_GEO_LOCATION_FAILURE: {
            const responseError = action.error || {}
            const errorData = responseError.data || responseError

            return errorData
        }

        case FETCH_GEO_LOCATION_REQUEST:
        case FETCH_GEO_LOCATION_SUCCESS:
            return null

                    
        default:
            return state
    }
}

export default combineReducers({
    isFetchingLocation,
    hasFetchedLocation,
    usersLocation,
    error
})