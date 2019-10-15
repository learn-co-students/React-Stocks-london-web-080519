import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
 
  // pass down the onclick function that you want to give to stock as a prop

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock=> <Stock key={stock.id} {...stock} handleClick={()=>this.props.addToPortfolio(stock)}/>)}
      </div>
    );
  }

}

export default StockContainer;
