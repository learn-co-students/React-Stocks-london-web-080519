import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortType === "Alphabetically"? true: false } onChange={props.onSortTypeClick}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortType === "Price"? true : false } onChange={props.onSortTypeClick}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.onFilterClick}>
          <option value="All">ALL </option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
