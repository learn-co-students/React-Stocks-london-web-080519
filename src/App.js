import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  state = {
    stocks: [],
    portfolio: [],
    removedPortfolio: []
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(stocks => this.setState({ stocks }));
  };

  addToPortfolio = stock => {
    this.setState({ portfolio: [...this.state.portfolio, stock] });
  };

  removedPortfolio = stock => {
    this.setState({
      portfolio: this.state.portfolio.filter(
        portfolio => portfolio.id !== stock.id
      )
    });
  };

  sortAlphabetically = () => {
    this.setState({
      stocks: this.state.stocks.sort((a, b) => a.ticker.localeCompare(b.ticker))
    });
  };

  sortByPrice = () => {
    this.setState({
      stocks: this.state.stocks.sort((a, b) => a.price - b.price)
    });
  };

  filterByType = type => {
    this.setState({
      stocks: this.state.stocks.filter(stocks => stocks.type === type)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          stocks={this.state.stocks}
          addToPortfolio={this.addToPortfolio}
          portfolio={this.state.portfolio}
          removedPortfolio={this.removedPortfolio}
          sortAlphabetically={this.sortAlphabetically}
          sortByPrice={this.sortByPrice}
          filterByType={this.filterByType}
        />
      </div>
    );
  }
}

export default App;
