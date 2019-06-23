import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from './components/search-bar/search-bar'
import MapContainer from './components/map/map-container'

import * as foursquare from './redux/foursquare-redux'
import * as geolocation from './redux/geolocation-redux'

import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        this.props.fetchGeoLocation()
    }

    render() {
        return (
            <div className="foursquare-places-app">
                <div className="foursquare-places-app__map-wrapper">
                    <MapContainer
                        venueLocation={{lat: '51.507351', long: '-0.127758'}}
                        usersLocation={{lat: '51.507351', long: '-0.127758'}} />
                </div>

                <div className="foursquare-places-app__sidebar">
                    <SearchBar
                        hasUsersLocation={this.props.hasUsersLocation}
                        onChange={(event) => {}}
                        onSubmit={(event) => {}} />
                </div>
            </div>  
        )
    }
}

const mapStateToProps = state => ({
    venues: state.foursquare.venues,
    usersLocation: state.geolocation.usersLocation,
    hasUsersLocation: Boolean(state.geolocation.usersLocation.lat)
})

const mapDispatchToProps = {
    fetchVenues: foursquare.fetchVenues,
    fetchGeoLocation: geolocation.fetchGeoLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
