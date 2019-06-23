import React, { Component } from 'react'
import { connect } from 'react-redux'

import MapContainer from './components/map/map-container'

import * as foursquare from './redux/foursquare-redux'

import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.props.fetchVenues({lat: '51.507351', long: '-0.127758'})
    }
    
    render() {
        return (
            <div className="foursquare-places-app">
                <div className="foursquare-places-app__map-wrapper">
                    <MapContainer
                        venueLocation={{lat: '51.507351', long: '-0.127758'}}
                        usersLocation={{lat: '51.507351', long: '-0.127758'}} />
                </div>  
            </div>  
        )
    }
}

const mapStateToProps = state => ({
    venues: state.foursquare.venues
})

const mapDispatchToProps = {
    fetchVenues: foursquare.fetchVenues
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
