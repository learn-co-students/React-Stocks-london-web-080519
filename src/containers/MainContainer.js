import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar
          sortStocks={this.props.sortStocks}
          filterStocks={this.props.filterStocks}
        />

        <div className="row">
          <div className="col-6">
            <StockContainer
              selectStock={this.props.selectStock}
              stocks={this.props.stocks}
              filteredStocks = {this.props.filteredStocks}
            />
          </div>
          <div className="col-6">
            <PortfolioContainer
              portfolio={this.props.portfolio}
              selectStock={this.props.selectStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
