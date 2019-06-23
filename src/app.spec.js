import React from 'react'
import ReactDOM from 'react-dom'

import ConnectedComponent from './app'

window.alert = () => {}

const App = ConnectedComponent.WrappedComponent;

it('renders without crashing', () => {
    const div = document.createElement('div')
    const fetchVenues = jest.fn()
    const fetchGeoLocation = jest.fn()
    const venues = []

    ReactDOM.render(<App fetchVenues={fetchVenues} fetchGeoLocation={fetchGeoLocation} venues={venues} />, div)
    ReactDOM.unmountComponentAtNode(div)
})