import React from "react";

const SearchBar = props => {
  const { sortType, handleSorting, handleFiltering } = props;
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={sortType === "Alphabetically" ? true : false}
          onChange={() => handleSorting("Alphabetically")}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={sortType === "Price" ? true : false}
          onChange={() => handleSorting("Price")}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={event => handleFiltering(event)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
