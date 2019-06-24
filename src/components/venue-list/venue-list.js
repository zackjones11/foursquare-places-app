import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as foursquare from '../../redux/foursquare-redux'

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

    render() {
        const loading = (
            <p className="c-venue-list__message">Loading...</p>
        )

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
    selectVenue: foursquare.selectVenue,
    showVenuesList: foursquare.showVenuesList
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueList)