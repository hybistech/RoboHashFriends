import React from 'react';
import '../components/SearchBox.css';

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div className='pa2'>
            <input
            className='pa3 ba tc bg-white b--green input' 
            type='search' 
            placeholder="Search Robots" 
            onChange = {searchChange}
            /> 
        </div>
    )
}
export default SearchBox;