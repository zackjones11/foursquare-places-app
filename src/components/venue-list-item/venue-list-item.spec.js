import React from 'react'
import ReactDOM from 'react-dom'

import VenueListItem from './venue-list-item'

describe('VenueListItem', () => {
    const venue = {
        name: 'test name',
        location: {
            formattedAddress: [
                'test address',
                'test'
            ]
        }
    }

    it('renders without crashing', () => {
        const div = document.createElement('div')
    
        ReactDOM.render(<VenueListItem venue={venue} />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
    
    it('should display name and address', () => {
        const wrapper = shallow(<VenueListItem venue={venue} />)
        const name = wrapper.find('.c-venue-list-item__name')
        const address = wrapper.find('.c-venue-list-item__address')
    
        expect(name.length).toBe(1)
        expect(name.text()).toBe('test name')
    
        expect(address.length).toBe(1)
        expect(address.text()).toBe('test address, test')
    })
})