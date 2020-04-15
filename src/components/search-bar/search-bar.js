import React, { useState } from "react";
import { connect } from "react-redux";
import * as venue from "../../redux/venues-redux";
import styles from "./search-bar.module.css";

const SearchBar = (props) => {
  const {
    hasUsersLocation,
    searchButtonClicked,
    fetchVenues,
    showVenuesList,
    usersLocation,
  } = props;
  const [query, setQuery] = useState();

  const onSearch = (event) => {
    event.preventDefault();
    searchButtonClicked({ query });
    fetchVenues({ ...usersLocation, query });
    showVenuesList(true);
  };

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={onSearch}>
        <input
          onChange={onChange}
          placeholder={
            hasUsersLocation ? "What kind of venue?" : "Getting location..."
          }
          className={styles.input}
        />

        {hasUsersLocation && (
          <button type="submit" className={styles.submit}>
            Go
          </button>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  usersLocation: state.geolocation.usersLocation,
  hasUsersLocation: Boolean(state.geolocation.usersLocation.lat),
});

const mapDispatchToProps = {
  fetchVenues: venue.fetchVenues,
  searchButtonClicked: venue.searchButtonClicked,
  showVenuesList: venue.showVenuesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
