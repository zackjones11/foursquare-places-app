import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from './components/search-bar/search-bar'
import MapContainer from './components/map/map-container'
import VenueList from './components/venue-list/venue-list'

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
                        usersLocation={this.props.usersLocation} />
                </div>

                <div className="foursquare-places-app__sidebar">
                    <SearchBar />
                    <VenueList />
                </div>
            </div>  
        )
    }
}

const mapStateToProps = state => ({
    venues: state.foursquare.venues,
    usersLocation: state.geolocation.usersLocation
})

const mapDispatchToProps = {
    fetchGeoLocation: geolocation.fetchGeoLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
