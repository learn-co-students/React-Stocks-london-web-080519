import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
// import { threadId } from 'worker_threads';

class App extends Component {

  STOCKS_URL = "http://localhost:3000/stocks"

  state = {
    stocks: [],
    portfolio: [],
    filter: "all",
    sort: "default"
  }

  componentDidMount() {
    fetch(this.STOCKS_URL).then(resp => resp.json())
    .then(stocks => this.setState({stocks}))
  }

  sortTypes = {
    "default": () => null,
    "Alphabetically": (a, b) => a.name.localeCompare(b.name),
    "Price": (a, b) => b.price - a.price
  }

  addToPortfolio = stock => this.setState({portfolio: [...this.state.portfolio, stock]})

  removeFromPortfolio = stockToRemove => this.setState({portfolio: this.state.portfolio.filter(stock => stock !== stockToRemove)})

  setFilter = (e) => this.setState({filter: e.target.value})

  applyFilter = () => this.state.stocks.filter(stock => this.state.filter === "all" || stock.type === this.state.filter)
  
  setSort = (e) => this.setState({sort: e.target.value})

  applySort = stocks => stocks.sort(this.sortTypes[this.state.sort])

  render() {
    const { portfolio} = this.state
    const { addToPortfolio, removeFromPortfolio, setSort, setFilter} = this
    const filteredAndSortedStocks = this.applySort(this.applyFilter())

    return (
      <div>
        <Header/>
        <MainContainer stocks={filteredAndSortedStocks} {...{ portfolio, addToPortfolio, removeFromPortfolio, setSort, setFilter }}/>
      </div>
    );
  }
}

export default App;
