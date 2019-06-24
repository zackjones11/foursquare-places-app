import { combineReducers } from 'redux'

export const FETCH_VENUES = 'FETCH_VENUES'
export const FETCH_VENUES_REQUEST = 'FETCH_VENUES_REQUEST'
export const FETCH_VENUES_SUCCESS = 'FETCH_VENUES_SUCCESS'
export const FETCH_VENUES_FAILURE = 'FETCH_VENUES_FAILURE'

export const SELECT_VENUE = 'SELECT_VENUE'

export const SHOW_VENUE_LIST = 'SHOW_VENUE_LIST'

export const INITIAL_STATE = {
    isFetchingVenues: false,
    hasFetchedVenues: null,
    venues: [],
    showingVenueList: false,
    selectedVenue: {
        location: {
            lat: '',
            lng: ''
        }
    },
    error: null,
}

/**
 * Action Creators
 */
export const fetchVenues = (payload) => ({ type: FETCH_VENUES, payload: payload })

export const selectVenue = (payload) => ({ type: SELECT_VENUE, payload: payload })

export const showVenuesList = (payload) => ({ type: SHOW_VENUE_LIST, payload: payload })

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

const showingVenueList = (state = INITIAL_STATE.showingVenueList, action = {}) => {
    switch (action.type) {
        case SHOW_VENUE_LIST:
            return action.payload

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

        case FETCH_VENUES_REQUEST:
        case FETCH_VENUES_FAILURE:
            return []

        default:
            return state
    }
} 

const selectedVenue = (state = INITIAL_STATE.selectedVenue, action = {}) => {
    switch (action.type) {
        case SELECT_VENUE:
            return {
                location: {
                    lat: action.payload.venue.location.lat,
                    long: action.payload.venue.location.lng
                }
            }

        default:
            return state
    }
}

const error = (state = INITIAL_STATE.error, action = {}) => {
    switch (action.type) {
        case FETCH_VENUES_FAILURE: {
            const responseError = action.error || {}
            const errorData = responseError.data || responseError

            return errorData
        }

        case FETCH_VENUES_REQUEST:
        case FETCH_VENUES_SUCCESS:
            return null

                    
        default:
            return state
    }
}

export default combineReducers({
    isFetchingVenues,
    hasFetchedVenues,
    showingVenueList,
    venues,
    selectedVenue,
    error
})