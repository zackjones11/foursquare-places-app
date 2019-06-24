import React from 'react'

import './venue-list-item.css'

const VenueListItem = ({venue, onClick}) => {
    const address = venue.location.formattedAddress.join(', ')

    return (
        <li data-id={venue.id} className="c-venue-list-item" onClick={onClick}>
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