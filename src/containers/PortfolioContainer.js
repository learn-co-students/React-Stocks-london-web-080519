import React, { Component } from 'react';
import Stock from '../components/Stock'
import Portfolio from '../components/Portfolio'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
      <h2>My Portfolio</h2>
      {this.props.portfolio.map(portfolio=> <Portfolio portfolio={portfolio} removeFromPortfolio={this.props.removeFromPortfolio}/>)}
      </div>
    );
  }

}

export default PortfolioContainer;
