import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const URL = "http://localhost:3000/stocks/";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sortType: "Default",
    filter: "Default"
  };

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(stocks => this.setState({ stocks }));
  }

  handleSorting = sortType => {
    this.setState({
      sortType
    });
  };

  handleFiltering = event => {
    this.setState({
      filter: event.target.value
    });
  };

  handleStockCardClick = addedStock => {
    const { portfolio, stocks } = this.state;
    let filteredStockList = [];

    if (
      portfolio.length !== 0 &&
      portfolio.find(stock => stock.id === addedStock.id)
    ) {
      filteredStockList = portfolio.filter(stock => stock.id !== addedStock.id);
    } else {
      filteredStockList = [...portfolio, addedStock];
    }
    this.setState({
      portfolio: filteredStockList
    });
  };

  sortStocks = () => {
    if (this.state.sortType === "Default") {
      return this.state.stocks;
    }
    if (this.state.sortType === "Alphabetically") {
      return this.state.stocks.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (this.state.sortType === "Price") {
      return this.state.stocks.sort((a, b) => a.price - b.price);
    }
  };

  filterStocks = () => {
    let sortedStockArray = this.sortStocks();
    if (this.state.filter === "Default") {
      return sortedStockArray;
    } else {
      return sortedStockArray.filter(stock => stock.type === this.state.filter);
    }
  };

  render() {
    const { portfolio, sortType } = this.state;
    const {
      filterStocks,
      handleSorting,
      handleFiltering,
      handleStockCardClick
    } = this;
    return (
      <div>
        <SearchBar
          sortType={sortType}
          handleSorting={handleSorting}
          handleFiltering={handleFiltering}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={filterStocks()}
              handleStockCardClick={handleStockCardClick}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={portfolio}
              handleStockCardClick={handleStockCardClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
