import React from 'react'
import ReactDOM from 'react-dom'

import MapContainer from './map-container'

const cords = {lat: '51.507351', long: '-0.127758'}

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<MapContainer venueLocation={cords} usersLocation={cords} />, div)
    ReactDOM.unmountComponentAtNode(div)
})