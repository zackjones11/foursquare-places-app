import reducer, * as redux from './geolocation-redux'

const { INITIAL_STATE } = redux

describe('geolocation redux', () => {
    describe('reducers', () => {
        describe('isFetchingLocation', () => {
            it('should handle initial state', () => {
                const { isFetchingLocation } = reducer(undefined, undefined)
                expect(isFetchingLocation).toEqual(INITIAL_STATE.isFetchingLocation)
            })

            it('should handle unknown action types', () => {
                const { isFetchingLocation } = reducer(INITIAL_STATE, { type: 'UNKNOWN' })
                expect(isFetchingLocation).toEqual(INITIAL_STATE.isFetchingLocation)
            })

            it(`${redux.FETCH_GEO_LOCATION_REQUEST} action type should set isFetchingLocation to true`, () => {
                const state = { ...INITIAL_STATE, isFetchingLocation: false }
                const { isFetchingLocation } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_REQUEST
                })

                expect(isFetchingLocation).toEqual(true)
            })

            it(`${redux.FETCH_GEO_LOCATION_SUCCESS} action type should set isFetchingLocation to false`, () => {
                const state = { ...INITIAL_STATE, isFetchingLocation: true }
                const { isFetchingLocation } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_SUCCESS,
                    payload: {
                        latitude: '234',
                        longitude: '121'
                    }
                })

                expect(isFetchingLocation).toEqual(false)
            })

            it(`${redux.FETCH_GEO_LOCATION_FAILURE} action type should set isFetchingLocation to false`, () => {
                const state = { ...INITIAL_STATE, isFetchingLocation: true }
                const { isFetchingLocation } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_FAILURE,
                    error: 'error'
                })

                expect(isFetchingLocation).toEqual(false)
            })
        })

        describe('hasFetchedLocation', () => {
            it('should handle initial state', () => {
                const { hasFetchedLocation } = reducer(undefined, undefined)
                expect(hasFetchedLocation).toEqual(INITIAL_STATE.hasFetchedLocation)
            })

            it('should handle unknown action types', () => {
                const { hasFetchedLocation } = reducer(INITIAL_STATE, { type: 'UNKNOWN' })
                expect(hasFetchedLocation).toEqual(INITIAL_STATE.hasFetchedLocation)
            })

            it(`${redux.FETCH_GEO_LOCATION_REQUEST} action type should set hasFetchedLocation to null`, () => {
                const state = { ...INITIAL_STATE, hasFetchedLocation: false }
                const { hasFetchedLocation } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_REQUEST
                })

                expect(hasFetchedLocation).toEqual(null)
            })

            it(`${redux.FETCH_GEO_LOCATION_SUCCESS} action type should set hasFetchedLocation to true`, () => {
                const state = { ...INITIAL_STATE, hasFetchedLocation: true }
                const { hasFetchedLocation } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_SUCCESS,
                    payload: {
                        latitude: '234',
                        longitude: '121'
                    }
                })

                expect(hasFetchedLocation).toEqual(true)
            })

            it(`${redux.FETCH_GEO_LOCATION_FAILURE} action type should set isFetchingLocation to false`, () => {
                const state = { ...INITIAL_STATE, isFetchingLocation: true }
                const { isFetchingLocation } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_FAILURE,
                    error: 'error'
                })

                expect(isFetchingLocation).toEqual(false)
            })
        })

        describe('usersLocation', () => {
            it('should handle initial state', () => {
                const { usersLocation } = reducer(undefined, undefined)
                expect(usersLocation).toEqual(INITIAL_STATE.usersLocation)
            })

            it('should handle unknown action types', () => {
                const { usersLocation } = reducer(INITIAL_STATE, { type: 'UNKNOWN' })
                expect(usersLocation).toEqual(INITIAL_STATE.usersLocation)
            })

            it(`${redux.FETCH_GEO_LOCATION_REQUEST} action type should set usersLocation to empty obj`, () => {
                const state = { ...INITIAL_STATE, usersLocation: [] }
                const { usersLocation } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_REQUEST
                })

                expect(usersLocation).toEqual({})
            })

            it(`${redux.FETCH_GEO_LOCATION_SUCCESS} action type should set usersLocation to payload`, () => {
                const state = { ...INITIAL_STATE, usersLocation: true }
                const { usersLocation } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_SUCCESS,
                    payload: {
                        latitude: '234',
                        longitude: '121'
                    }
                })

                expect(usersLocation).toEqual({lat: '234', long: '121'})
            })

            it(`${redux.FETCH_GEO_LOCATION_FAILURE} action type should set usersLocation to empty obj`, () => {
                const state = { ...INITIAL_STATE, usersLocation: true }
                const { usersLocation } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_FAILURE,
                    error: 'error'
                })

                expect(usersLocation).toEqual({})
            })
        })

        describe('error', () => {
            it('should handle initial state', () => {
                const { error } = reducer(undefined, undefined)
                expect(error).toEqual(INITIAL_STATE.error)
            })

            it('should handle unknown action types', () => {
                const { error } = reducer(INITIAL_STATE, { type: 'UNKNOWN' })
                expect(error).toEqual(INITIAL_STATE.error)
            })

            it(`${redux.FETCH_GEO_LOCATION_REQUEST} action type should set error to null`, () => {
                const state = { ...INITIAL_STATE, error: [] }
                const { error } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_REQUEST
                })

                expect(error).toEqual(null)
            })

            it(`${redux.FETCH_GEO_LOCATION_SUCCESS} action type should set error to null`, () => {
                const state = { ...INITIAL_STATE, error: true }
                const { error } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_SUCCESS,
                    payload: {
                        latitude: '234',
                        longitude: '121'
                    }
                })

                expect(error).toEqual(null)
            })

            it(`${redux.FETCH_GEO_LOCATION_FAILURE} action type should set error to payload`, () => {
                const state = { ...INITIAL_STATE, error: true }
                const { error } = reducer(state, {
                    type: redux.FETCH_GEO_LOCATION_FAILURE,
                    error: 'error'
                })

                expect(error).toEqual('error')
            })
        })
    })

    describe('action creators', () => {
        describe('fetchGeoLocation', () => {
            it(`should return action type ${redux.FETCH_GEO_LOCATION} with payload`, () => {
                expect(redux.fetchGeoLocation()).toEqual({
                    type: redux.FETCH_GEO_LOCATION
                })
            })
        })
    })
})