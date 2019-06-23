import React from 'react'

import './search-bar.css'

const SearchBar = ({onSubmit, onChange, hasUsersLocation}) => {
    let placeholder = 'Getting location...'
    
    if (hasUsersLocation) {
        placeholder = 'What kind of venue?'
    }

    return (
        <div className="c-search-bar">
            <form onSubmit={onSubmit} className="c-search-bar__form">
                <input onChange={onChange}
                    placeholder={placeholder}
                    className="c-search-bar__input g-dropshadow-box" />

                {hasUsersLocation ? (
                    <button type="submit"
                        className="c-search-bar__submit">Go</button>
                ) : null}
            </form>
        </div>
    )
}

export default SearchBar