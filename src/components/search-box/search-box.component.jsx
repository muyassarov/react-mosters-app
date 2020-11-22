import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handlerChange}) => (
  <div>
    <input type='search' className='search' onChange={handlerChange} placeholder={placeholder}/>
  </div>
);