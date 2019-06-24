import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Waypoint } from 'react-waypoint'

import * as venues from '../../redux/venues-redux'

import Spinner from '../spinner/spinner'
import VenueListItem from '../venue-list-item/venue-list-item'

import './venue-list.css'

class VenueList extends Component {
    constructor(props) {
        super(props)
    }

    onItemClicked = (event) => {
        event.preventDefault()
        const clickedId = event.currentTarget.getAttribute('data-id')
        const venue = this.props.venues.filter((v) => v.venue.id === clickedId)

        this.props.selectVenue({...venue[0]})
        this.props.showVenuesList(false)
    }

    getMoreVenues = (event) => {
        const paginationOffset =  20 * (this.props.pageNum - 1)
        this.props.fetchVenues({...this.props.usersLocation, query: this.props.searchQuery, incrementPageNum: true, paginationOffset})
    }

    render() {
        const loading = (
            <p className="c-venue-list__message">Loading...</p>
        )

        const spinner = <Spinner />
        const waypoint = <Waypoint onEnter={this.getMoreVenues} />

        const dropdown = (
            <span className="c-venue-list__dropdown">
                {(this.props.venues.length > 0) ? (
                    <ul className="c-venue-list__ul">
                        {this.props.venues.map((v, key) =>
                            <VenueListItem
                                key={key} 
                                venue={v.venue}
                                onClick={this.onItemClicked} />
                        )}
                    </ul>
                ) : (
                    <p className="c-venue-list__message">No venues found</p>
                )}

                {(this.props.isFetching === true && this.props.venues.length > 0) ? spinner : waypoint }
            </span>
        )

        return (
            <div className="c-venue-list g-dropshadow-box">
                {(this.props.isFetching && this.props.venues.length === 0) ? loading : dropdown }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    venues: state.venues.venues,
    pageNum: state.venues.pageNum,
    searchQuery: state.venues.searchQuery,
    isFetching: state.venues.isFetchingVenues,
    usersLocation: state.geolocation.usersLocation
})

const mapDispatchToProps = {
    selectVenue: venues.selectVenue,
    fetchVenues: venues.fetchVenues,
    showVenuesList: venues.showVenuesList
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueList)