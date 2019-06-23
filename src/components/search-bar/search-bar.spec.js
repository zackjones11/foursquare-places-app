import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './search-bar'

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<SearchBar hasUsersLocation={false} />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('should display fetching location message when hasUsersLocation is false', () => {
    const wrapper = shallow(<SearchBar  hasUsersLocation={false} />)
    expect(wrapper.find('input').props().placeholder).toContain('Getting location...')
})

it('should search venues message when hasUsersLocation is true', () => {
    const wrapper = shallow(<SearchBar  hasUsersLocation={true} />)
    expect(wrapper.find('input').props().placeholder).toContain('What kind of venue?')
})

it('should not have a submit button when hasUsersLocation is false', () => {
    const wrapper = shallow(<SearchBar  hasUsersLocation={false} />)
    expect(wrapper.find('.c-search-bar__submit')).toHaveLength(0)
})

it('should have a submit button when hasUsersLocation is true', () => {
    const wrapper = shallow(<SearchBar  hasUsersLocation={true} />)
    expect(wrapper.find('.c-search-bar__submit')).toHaveLength(1)
})