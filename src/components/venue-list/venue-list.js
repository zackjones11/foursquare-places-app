import React from "react";
import { connect } from "react-redux";
import { Waypoint } from "react-waypoint";
import * as venues from "../../redux/venues-redux";
import Spinner from "../spinner/spinner";
import VenueListItem from "../venue-list-item/venue-list-item";
import styles from "./venue-list.module.css";

const VenueList = (props) => {
  const {
    venues,
    hasNoMoreResults,
    isFetching,
    hasFetchedVenues,
    selectVenue,
    showVenuesList,
    fetchVenues,
    usersLocation,
    pageNum,
    searchQuery: query,
  } = props;

  const onItemClicked = (venue) => {
    selectVenue(venue);
    showVenuesList(false);
  };

  const getMoreVenues = () => {
    console.log("hasNoMoreResults", hasNoMoreResults);

    if (hasNoMoreResults) {
      return;
    }

    console.log("hasNoMoreResults", hasNoMoreResults);

    const paginationOffset = 20 * (pageNum - 1);
    fetchVenues({
      ...usersLocation,
      query,
      incrementPageNum: true,
      paginationOffset,
    });
  };

  return (
    <div className={styles.wrap}>
      {venues && (
        <ul className={styles.venueList}>
          {venues.map((v, key) => (
            <VenueListItem key={key} venue={v.venue} onClick={onItemClicked} />
          ))}
        </ul>
      )}

      {isFetching && venues.length && !hasNoMoreResults ? (
        <Spinner />
      ) : (
        <Waypoint onEnter={getMoreVenues} />
      )}

      <p className={styles.message}>
        {isFetching && !venues.length && "Loading..."}
        {hasFetchedVenues && !venues.length && "No venues found"}
        {hasNoMoreResults && "No more venues found"}
      </p>
    </div>
  );
};

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
