import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "./components/search-bar/search-bar";
import MapContainer from "./components/map/map-container";
import VenueList from "./components/venue-list/venue-list";
import * as geolocation from "./redux/geolocation-redux";

import styles from "./app.module.css";

const App = (props) => {
  const { hasUsersLocation, fetchGeoLocation, showingVenueList } = props;

  useEffect(() => {
    fetchGeoLocation();
  }, [fetchGeoLocation]);

  return (
    <div className={styles.container}>
      <div>{hasUsersLocation && <MapContainer />}</div>

      <div className={styles.sidebar}>
        <SearchBar />
        {showingVenueList && <VenueList />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  venues: state.venues.venues,
  hasUsersLocation: Boolean(state.geolocation.usersLocation.lat),
  showingVenueList: state.venues.showingVenueList,
});

const mapDispatchToProps = {
  fetchGeoLocation: geolocation.fetchGeoLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
