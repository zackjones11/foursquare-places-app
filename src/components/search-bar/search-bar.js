import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as foursquare from '../../redux/foursquare-redux'

import './search-bar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.props.fetchVenues({lat: '51.507351', long: '-0.127758'})
    }

    render() {
        let placeholder = 'Getting location...'
    
        if (this.props.hasUsersLocation) {
            placeholder = 'What kind of venue?'
        }
    
        return (
            <div className="c-search-bar">
                <form onSubmit={() => {}} className="c-search-bar__form">
                    <input onChange={() => {}}
                        placeholder={placeholder}
                        className="c-search-bar__input g-dropshadow-box" />
    
                    {this.props.hasUsersLocation ? (
                        <button type="submit"
                            className="c-search-bar__submit">Go</button>
                    ) : null}
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    hasUsersLocation: Boolean(state.geolocation.usersLocation.lat)
})

const mapDispatchToProps = {
    fetchVenues: foursquare.fetchVenues,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)