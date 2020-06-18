import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2> 
          {
           this.props.portfolio.map(stock => <Stock key={stock.id} handleClick={() => this.props.removeFromPortfolio(stock)} {...stock}/>)  //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
