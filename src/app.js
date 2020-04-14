import React, { Component } from "react";
import { connect } from "react-redux";

import SearchBar from "./components/search-bar/search-bar";
import MapContainer from "./components/map/map-container";
import VenueList from "./components/venue-list/venue-list";

import * as geolocation from "./redux/geolocation-redux";

import styles from "./app.module.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchGeoLocation();
  }

  render() {
    return (
      <div className={styles.container}>
        <div>{this.props.hasUsersLocation && <MapContainer />}</div>

        <div className={styles.sidebar}>
          <SearchBar />
          {this.props.showingVenueList && <VenueList />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  venues: state.venues.venues,
  hasUsersLocation: Boolean(state.geolocation.usersLocation.lat),
  showingVenueList: state.venues.showingVenueList,
});

const mapDispatchToProps = {
  fetchGeoLocation: geolocation.fetchGeoLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
