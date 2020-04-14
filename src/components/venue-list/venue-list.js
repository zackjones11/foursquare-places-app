import React, { Component } from "react";
import { connect } from "react-redux";
import { Waypoint } from "react-waypoint";

import * as venues from "../../redux/venues-redux";

import Spinner from "../spinner/spinner";
import VenueListItem from "../venue-list-item/venue-list-item";

import styles from "./venue-list.module.css";

class VenueList extends Component {
  onItemClicked = (event) => {
    event.preventDefault();
    const clickedId = event.currentTarget.getAttribute("data-id");
    const venue = this.props.venues.filter((v) => v.venue.id === clickedId);

    this.props.selectVenue({ ...venue[0] });
    this.props.showVenuesList(false);
  };

  getMoreVenues = () => {
    if (this.props.hasNoMoreResults) {
      return;
    }

    const paginationOffset = 20 * (this.props.pageNum - 1);
    this.props.fetchVenues({
      ...this.props.usersLocation,
      query: this.props.searchQuery,
      incrementPageNum: true,
      paginationOffset,
    });
  };

  render() {
    return (
      <div className={styles.wrap}>
        {this.props.venues && (
          <ul className={styles.venueList}>
            {this.props.venues.map((v, key) => (
              <VenueListItem
                key={key}
                venue={v.venue}
                onClick={this.onItemClicked}
              />
            ))}
          </ul>
        )}
        <p className={styles.message}>
          {this.props.isFetching && !this.props.venues.length && "Loading..."}
          {this.props.hasFetchedVenues &&
            !this.props.venues.length &&
            "No venues found"}
          {this.props.hasNoMoreResults && "No more venues found"}
        </p>
        {this.props.isFetching &&
        this.props.venues.length &&
        !this.props.hasNoMoreResults ? (
          <Spinner />
        ) : (
          <Waypoint onEnter={this.getMoreVenues} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  venues: state.venues.venues,
  pageNum: state.venues.pageNum,
  searchQuery: state.venues.searchQuery,
  isFetching: state.venues.isFetchingVenues,
  hasNoMoreResults: state.venues.hasNoMoreResults,
  usersLocation: state.geolocation.usersLocation,
});

const mapDispatchToProps = {
  selectVenue: venues.selectVenue,
  fetchVenues: venues.fetchVenues,
  showVenuesList: venues.showVenuesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueList);
