import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const URL = "http://localhost:3000/stocks"

class MainContainer extends Component {

  // upon render, no radio buttons are selected, but tech is the default filter
  state = {
    stocks: [], 
    portfolio: [],
    sort: "",
    filter: "Tech"
  }

  sortOptions = (event) => {
    this.setState({
      sort: event.target.value
    })
  }


  filterOptions = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  componentDidMount() {
    fetch(URL).then(resp=> resp.json()).then(stocks => this.setState({stocks}))
  }

  addToPortfolio = (stock) => {
    // when using spread to add, assign it to the array, plus the stock into the array you want to add
    this.setState({portfolio: [...this.state.portfolio, stock]})    
  }

  sellStock = (stock) => {
    //find the index of what you want to remove
    let removed = this.state.portfolio.findIndex(s=> s.id === stock.id)
    //splice it out, at the index of the found, and remove 1 item
    this.state.portfolio.splice(removed, 1)
    this.setState({
      // after you have updated the portfolio, setState to what it's been updated as locally to prompt it to re-render
      portfolio: [...this.state.portfolio]
    })
  }

  renderOptions = () => {
    let defaultView = this.state.stocks.filter(stock => stock.type === this.state.filter)
    if (this.state.sort === "Alphabetically") {
      // have to do localeCompare - a function - for strings
      return defaultView.sort((a,b) => a.ticker.localeCompare(b.ticker))
    } else if (this.state.sort === "Price" ) {
      // for sorting numbers - subtract one from the other (sort is returning -1, 0, or 1)
      return defaultView.sort((a,b) => b.price - a.price)
    } else {
      return defaultView
    }
  }


  render() {
    const stocksToRender = this.renderOptions()
    return (
      <div>
        <SearchBar sortOptions={this.sortOptions} filterOptions={this.filterOptions} sort={this.state.sort} filter={this.state.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocksToRender} addToPortfolio={this.addToPortfolio} />

            </div>
            <div className="col-4">
              <PortfolioContainer portfolio={this.state.portfolio} sellStock={this.sellStock} />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
