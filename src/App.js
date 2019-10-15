import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

const STOCKS_URL = "http://localhost:3000/stocks";
class App extends Component {
  state = {
    stocks: [],
    portfolio: [],
    selectedStock: [],
    showStocks: "all",
    filterStocks: false
  };

  componentDidMount = () => {
    this.getStocks();
  };

  renderStocks = () => {
    if (this.state.sortType === "alphabetically") {
      return this.state.stocks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.state.sortType === "a") {
      return this.state.stocks.sort((a, b) => b.price - a.price);
    } else {
      return this.state.stocks;
    }
  };

  sortStocks = value => {
    if (value === "Alphabetically") {
      this.setState({
        showStocks: "name"
      });
      return this.state.stocks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "Price") {
      // this.state.stocks.sort
      this.setState({
        showStocks: "price"
      });
      return this.state.stocks.sort((a, b) => b.price - a.price);
    }
  };

  getStocks = () => {
    fetch(STOCKS_URL)
      .then(resp => resp.json())
      .then(data => this.setState({ stocks: data, filterStocks: false }));
  };

  selectStock = stock => {
    if (this.state.stocks.includes(stock)) {
      let newStocks = this.state.stocks.filter(function(value, index, array) {
        return value.id !== stock.id;
      });

      this.setState({
        portfolio: [...this.state.portfolio, stock],
        stocks: newStocks,
        filterStocks: false
      });
    } else {
      let newPortfolio = this.state.portfolio.filter(function(
        value,
        index,
        array
      ) {
        return value.id !== stock.id;
      });

      this.setState({
        portfolio: newPortfolio,
        stocks: [...this.state.stocks, stock]
      });
    }
  };

  filterStocks = event => {
    event.persist();
    // this.getStocks()
      if (event.target.value === "All") {
        
        this.getStocks()
        // console.log(this.state)

    } else {let filteredStocks = this.state.stocks.filter(function(value, index, array) {
        // console.log(event.target.value)
        return value.type === event.target.value
      });
      this.setState({
        filteredStocks: filteredStocks,
        filterStocks: true
      })
    }
  };

  setFilterType = () => {
    if (this.state.filterStocks === true) {
      let stocks = this.state.filteredStocks
      return stocks
    } else {let stocks = this.state.stocks
    return stocks}
  }

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          sortStocks={this.sortStocks}
          filterStocks={this.filterStocks}
          selectStock={this.selectStock}
          portfolio={this.state.portfolio}
          stocks={this.setFilterType()}
          filteredStocks = {this.state.filteredStocks}
        />
      </div>
    );
  }
}

export default App;
