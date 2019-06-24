import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as foursquare from '../../redux/foursquare-redux'

import './search-bar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { query: '' }
    }

    onSearch = (event) => {
        event.preventDefault()
        
        const query = this.state.query
        this.props.fetchVenues({...this.props.usersLocation, query})
    }

    onChange = (event) => {
        const value = event.target.value
        this.setState({ query: value })
    }

    render() {
        let placeholder = 'Getting location...'
    
        if (this.props.hasUsersLocation) {
            placeholder = 'What kind of venue?'
        }
    
        return (
            <div className="c-search-bar">
                <form onSubmit={this.onSearch} className="c-search-bar__form">
                    <input 
                        onChange={this.onChange} 
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
    usersLocation: state.geolocation.usersLocation,
    hasUsersLocation: Boolean(state.geolocation.usersLocation.lat)
})

const mapDispatchToProps = {
    fetchVenues: foursquare.fetchVenues,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)