import React, { Component } from 'react'
import { connect } from 'react-redux'

import VenueListItem from '../venue-list-item/venue-list-item'

import './venue-list.css'

class VenueList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const loading = (
            <p className="c-venue-list__message">Loading...</p>
        )

        const dropdown = (
            <span className="c-venue-list__dropdown">
                {(this.props.venues.length > 0) ? (
                    <ul className="c-venue-list__ul">
                        {this.props.venues.map((venue, key) =>
                            <VenueListItem key={key} venue={venue.venue} />
                        )}
                    </ul>
                ) : (
                    <p className="c-venue-list__message">No venues found</p>
                )}
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
    venues: state.foursquare.venues,
    isFetching: state.foursquare.isFetchingVenues
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueList)