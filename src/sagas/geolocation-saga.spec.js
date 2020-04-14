import { testSaga } from "redux-saga-test-plan";

import { fetchGeoLocation } from "./geolocation-saga";
import * as services from "../services";
import * as redux from "../redux/geolocation-redux";

describe("fetchGeoLocation saga", () => {
  let saga;
  const response = {
    data: {
      latitude: "234",
      longitude: "121",
    },
  };

  beforeEach(() => {
    saga = testSaga(fetchGeoLocation);
  });

  it(`should dispatch ${redux.FETCH_GEO_LOCATION_SUCCESS} when successful`, () => {
    saga.next().put({ type: redux.FETCH_GEO_LOCATION_REQUEST });
    saga.next().call(services.fetchGeoLocation);
    saga
      .next(response)
      .put({ type: redux.FETCH_GEO_LOCATION_SUCCESS, payload: response.data });
    saga.next().isDone();
  });

  it(`should dispatch ${redux.FETCH_GEO_LOCATION_FAILURE} when failed`, () => {
    const error = "some-error";

    saga.next().put({ type: redux.FETCH_GEO_LOCATION_REQUEST });
    saga.next().call(services.fetchGeoLocation);
    saga.next({ error }).put({ type: redux.FETCH_GEO_LOCATION_FAILURE, error });
    saga.next().isDone();
  });
});
