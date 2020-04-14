import { testSaga } from 'redux-saga-test-plan'

import { fetchVenues } from './venues-saga'
import * as services from '../services'
import * as redux from '../redux/venues-redux'

describe('fetchVenues saga', () => {
    let saga
    const data = {
        lat: '51.507877',
        long: '-0.087732'
    }

    const response = {
        data: {
            response: {
                groups: [
                    {
                        type: "Recommended Places",
                        name: "recommended",
                        items: [{
                            id: 1
                        }]
                    }
                ]
            }
        }
    }

    beforeEach(() => {
        saga = testSaga(fetchVenues, {
            payload: data
        })
    })

    it(`should dispatch ${redux.FETCH_VENUES_SUCCESS} when successful`, () => {
        saga.next().put({ type: redux.FETCH_VENUES_REQUEST, payload: { incrementPageNum: false } })
        saga.next().call(services.fetchVenues, data)
        saga.next(response).put({ type: redux.FETCH_VENUES_SUCCESS, payload: {
            venues: response.data.response.groups[0].items,
            incrementPageNum: false
        } })
        saga.next().isDone()
    })

    it(`should dispatch ${redux.FETCH_VENUES_FAILURE} when failed`, () => {
        const error = 'some-error'

        saga.next().put({ type: redux.FETCH_VENUES_REQUEST, payload: { incrementPageNum: false } })
        saga.next().call(services.fetchVenues, data)
        saga.next({ error }).put({ type: redux.FETCH_VENUES_FAILURE, error })
        saga.next().isDone()
    })
})