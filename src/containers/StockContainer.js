import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  listStocks = () => {
    return this.props.stockData.map(stock => {
     return <Stock {...stock} stock={stock} trigger={this.props.trigger}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
       {this.listStocks()}
      </div>
    );
  }

}

export default StockContainer;
