import React from "react";
import { connect } from "react-redux";
import * as venue from "../../redux/venues-redux";

import styles from "./search-bar.module.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
  }

  onSearch = (event) => {
    event.preventDefault();

    const query = this.state.query;
    this.props.searchButtonClicked({ query });
    this.props.fetchVenues({ ...this.props.usersLocation, query });
    this.props.showVenuesList(true);
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  };

  render() {
    let placeholder = "Getting location...";

    if (this.props.hasUsersLocation) {
      placeholder = "What kind of venue?";
    }

    return (
      <div className={styles.searchBar}>
        <form onSubmit={this.onSearch}>
          <input
            onChange={this.onChange}
            placeholder={placeholder}
            className={styles.input}
          />

          {this.props.hasUsersLocation ? (
            <button type="submit" className={styles.submit}>
              Go
            </button>
          ) : null}
        </form>
      </div>
    );
  }
}

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
