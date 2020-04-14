import axios from "axios";

import {
  EXPLORE_VENUES_URL,
  FOURSQUARE_CLIENT_ID,
  FOURSQUARE_CLIENT_SECRET,
  API_VERSION_NUMBER,
  PAGINATION_LIMIT,
} from "../constants/foursquare-api";

export const fetchVenues = async ({
  lat,
  long,
  paginationOffset = 0,
  query = "",
}) => {
  try {
    let url = `${EXPLORE_VENUES_URL}?ll=${lat},${long}&query=${query}&client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=${API_VERSION_NUMBER}&limit=${PAGINATION_LIMIT}&offset=${paginationOffset}`;
    return await axios.get(url);
  } catch (err) {
    console.log(err);
  }
};
