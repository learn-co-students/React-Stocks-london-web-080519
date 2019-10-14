import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="alphabetically" checked={props.sortState == 'alphabetically' ? true : false} onChange={(event) => props.setSort('alphabetically') }/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="price" checked={props.sortState == 'price' ? true : false} onChange={(event) => props.setSort('price')}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={event => props.setFilter(event.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
