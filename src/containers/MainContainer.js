import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar sortAlphabetically={this.props.sortAlphabetically} sortByPrice={this.props.sortByPrice} filterByType={this.props.filterByType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} addToPortfolio={this.props.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.props.stocks} addToPortfolio={this.props.addToPortfolio} portfolio={this.props.portfolio} removedPortfolio={this.props.removedPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
