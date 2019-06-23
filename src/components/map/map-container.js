import React, { PureComponent } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

import { GOOGLE_MAPS_API_KEY } from '../../constants/google-maps-api'

class MapContainer extends PureComponent {
    render() {
        const style = {
            width: '100%',
            height: '100%'
        }

        const initialCenter = {
            lat: this.props.usersLocation.lat,
            lng: this.props.usersLocation.long
        }

        const venueCenter = {
            lat: this.props.venueLocation.lat,
            lng: this.props.venueLocation.long
        }

        let markerPosition = {}

        if (venueCenter.lat !== null) {
            markerPosition = {
                lat: this.props.venueLocation.lat,
                lng: this.props.venueLocation.long
            }
        } else {
            markerPosition = {
                lat: this.props.usersLocation.lat,
                lng: this.props.usersLocation.long
            }
        }

        return (
            <Map
                google={this.props.google}
                zoom={15}
                mapTypeControl={false}
                fullscreenControl={false}
                style={style}
                initialCenter={initialCenter}
                center={markerPosition}>
                <Marker position={markerPosition} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({ apiKey: GOOGLE_MAPS_API_KEY })(MapContainer)