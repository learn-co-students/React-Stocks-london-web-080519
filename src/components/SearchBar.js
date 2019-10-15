import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input onClick = {() => {this.props.sortStocks("Alphabetically")}} type="radio" value="Alphabetically" checked={null} onChange={null}/>
        Alphabetically
      </label>
      <label>
        <input onClick = {() => {this.props.sortStocks("Price")}} type="radio" value="Price" checked={null} onChange={null}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => this.props.filterStocks(event)}>
          <option value={null}>All</option>
          <option value="Tech">Tech</option>
          <option  value="Sportswear">Sportswear</option>
          <option  value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
    }
}


export default SearchBar;
