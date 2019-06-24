import React from 'react'

import './venue-list-item.css'

const VenueListItem = ({venue}) => {
    const address = venue.location.formattedAddress.join(', ')

    return (
        <li className="c-venue-list-item">
            <div className="c-venue-list-item__name">
                {venue.name}
            </div>

            <div className="c-venue-list-item__address">
                {address}
            </div>
        </li>
    )
}

export default VenueListItem