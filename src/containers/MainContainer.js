import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar changeSortType={this.props.changeSortType} changeFilterType={this.props.changeFilterType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} addToPortfolio={this.props.addToPortfolio}/>
              

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio = {this.props.portfolio} removeFromPortfolio={this.props.removeFromPortfolio}/>
        

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
