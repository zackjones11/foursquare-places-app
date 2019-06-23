import React, { Component } from 'react'
import { connect } from 'react-redux'

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
                <p>app</p> 
                {this.props.venues.map((venue) => (
                    <p>{venue.venue.name}</p>
                ))}    
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
