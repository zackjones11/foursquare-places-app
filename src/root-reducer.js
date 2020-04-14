import { combineReducers } from "redux";

import venues from "./redux/venues-redux";
import geolocation from "./redux/geolocation-redux";

export default combineReducers({
  venues,
  geolocation,
});
