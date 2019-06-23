import reducer, * as redux from './foursquare-redux'

const { INITIAL_STATE } = redux

describe('foursquare redux', () => {
    describe('reducers', () => {
        describe('isFetchingVenues', () => {
            it('should handle initial state', () => {
                const { isFetchingVenues } = reducer(undefined, undefined)
                expect(isFetchingVenues).toEqual(INITIAL_STATE.isFetchingVenues)
            })

            it('should handle unknown action types', () => {
                const { isFetchingVenues } = reducer(INITIAL_STATE, { type: 'UNKNOWN' })
                expect(isFetchingVenues).toEqual(INITIAL_STATE.isFetchingVenues)
            })

            it(`${redux.FETCH_VENUES_REQUEST} action type should set isFetchingVenues to true`, () => {
                const state = { ...INITIAL_STATE, isFetchingVenues: false }
                const { isFetchingVenues } = reducer(state, {
                    type: redux.FETCH_VENUES_REQUEST
                })

                expect(isFetchingVenues).toEqual(true)
            })

            it(`${redux.FETCH_VENUES_SUCCESS} action type should set isFetchingVenues to false`, () => {
                const state = { ...INITIAL_STATE, isFetchingVenues: true }
                const { isFetchingVenues } = reducer(state, {
                    type: redux.FETCH_VENUES_SUCCESS,
                    payload: [{
                        name: 'recommended',
                        items: [{
                            name: 'place name'
                        }]
                    }],
                })

                expect(isFetchingVenues).toEqual(false)
            })

            it(`${redux.FETCH_VENUES_FAILURE} action type should set isFetchingVenues to false`, () => {
                const state = { ...INITIAL_STATE, isFetchingVenues: true }
                const { isFetchingVenues } = reducer(state, {
                    type: redux.FETCH_VENUES_FAILURE,
                    error: 'error'
                })

                expect(isFetchingVenues).toEqual(false)
            })
        })

        describe('hasFetchedVenues', () => {
            it('should handle initial state', () => {
                const { hasFetchedVenues } = reducer(undefined, undefined)
                expect(hasFetchedVenues).toEqual(INITIAL_STATE.hasFetchedVenues)
            })

            it('should handle unknown action types', () => {
                const { hasFetchedVenues } = reducer(INITIAL_STATE, { type: 'UNKNOWN' })
                expect(hasFetchedVenues).toEqual(INITIAL_STATE.hasFetchedVenues)
            })

            it(`${redux.FETCH_VENUES_REQUEST} action type should set hasFetchedVenues to null`, () => {
                const state = { ...INITIAL_STATE, hasFetchedVenues: false }
                const { hasFetchedVenues } = reducer(state, {
                    type: redux.FETCH_VENUES_REQUEST
                })

                expect(hasFetchedVenues).toEqual(null)
            })

            it(`${redux.FETCH_VENUES_SUCCESS} action type should set hasFetchedVenues to true`, () => {
                const state = { ...INITIAL_STATE, hasFetchedVenues: true }
                const { hasFetchedVenues } = reducer(state, {
                    type: redux.FETCH_VENUES_SUCCESS,
                    payload: [{
                        name: 'recommended',
                        items: [{
                            name: 'place name'
                        }]
                    }],
                })

                expect(hasFetchedVenues).toEqual(true)
            })

            it(`${redux.FETCH_VENUES_FAILURE} action type should set isFetchingVenues to false`, () => {
                const state = { ...INITIAL_STATE, isFetchingVenues: true }
                const { isFetchingVenues } = reducer(state, {
                    type: redux.FETCH_VENUES_FAILURE,
                    error: 'error'
                })

                expect(isFetchingVenues).toEqual(false)
            })
        })

        describe('venues', () => {
            it('should handle initial state', () => {
                const { venues } = reducer(undefined, undefined)
                expect(venues).toEqual(INITIAL_STATE.venues)
            })

            it('should handle unknown action types', () => {
                const { venues } = reducer(INITIAL_STATE, { type: 'UNKNOWN' })
                expect(venues).toEqual(INITIAL_STATE.venues)
            })

            it(`${redux.FETCH_VENUES_REQUEST} action type should set venues to empty array`, () => {
                const state = { ...INITIAL_STATE, venues: [] }
                const { venues } = reducer(state, {
                    type: redux.FETCH_VENUES_REQUEST
                })

                expect(venues).toEqual([])
            })

            it(`${redux.FETCH_VENUES_SUCCESS} action type should set venues to payload`, () => {
                const state = { ...INITIAL_STATE, venues: true }
                const { venues } = reducer(state, {
                    type: redux.FETCH_VENUES_SUCCESS,
                    payload: [{
                        name: 'recommended',
                        items: [{
                            name: 'place name'
                        }]
                    }],
                })

                expect(venues).toEqual([{ name: 'place name' }])
            })

            it(`${redux.FETCH_VENUES_FAILURE} action type should set venues to empty array`, () => {
                const state = { ...INITIAL_STATE, venues: true }
                const { venues } = reducer(state, {
                    type: redux.FETCH_VENUES_FAILURE,
                    error: 'error'
                })

                expect(venues).toEqual([])
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

            it(`${redux.FETCH_VENUES_REQUEST} action type should set error to null`, () => {
                const state = { ...INITIAL_STATE, error: [] }
                const { error } = reducer(state, {
                    type: redux.FETCH_VENUES_REQUEST
                })

                expect(error).toEqual(null)
            })

            it(`${redux.FETCH_VENUES_SUCCESS} action type should set error to null`, () => {
                const state = { ...INITIAL_STATE, error: true }
                const { error } = reducer(state, {
                    type: redux.FETCH_VENUES_SUCCESS,
                    payload: [{
                        name: 'recommended',
                        items: [{
                            name: 'place name'
                        }]
                    }],
                })

                expect(error).toEqual(null)
            })

            it(`${redux.FETCH_VENUES_FAILURE} action type should set error to payload`, () => {
                const state = { ...INITIAL_STATE, error: true }
                const { error } = reducer(state, {
                    type: redux.FETCH_VENUES_FAILURE,
                    error: 'error'
                })

                expect(error).toEqual('error')
            })
        })
    })

    describe('action creators', () => {
        describe('fetchVenues', () => {
            it(`should return action type ${redux.FETCH_VENUES} with payload`, () => {
                expect(redux.fetchVenues('some-payload')).toEqual({
                    type: redux.FETCH_VENUES,
                    payload: 'some-payload'
                })
            })
        })
    })
})