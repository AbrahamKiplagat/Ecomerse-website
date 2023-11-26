import React from 'react';
import './Style.css';

const Search = (props) => {
    return (
        <div className="d-flex align-items-center pt-80">
            <span className="search">Search </span>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {
                props.setFilteredCards(event.target.value, "search")
            }} />
        </div>
    )
}

export default Search;
