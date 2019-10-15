import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const URL = "http://localhost:3000/stocks"

class MainContainer extends Component {

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
    this.setState({portfolio: [...this.state.portfolio, stock]})    
  }

  sellStock = (stock) => {
    let removed = this.state.portfolio.findIndex(s=> s.id === stock.id)
    this.state.portfolio.splice(removed, 1)
    this.setState({
      portfolio: [...this.state.portfolio]
    })
  }

  renderOptions = () => {
    let defaultView = this.state.stocks.filter(stock => stock.type === this.state.filter)
    if (this.state.sort === "Alphabetically") {
      console.log(this.state.sort)
      return defaultView.sort((a,b) => a.ticker.localeCompare(b.ticker))
    } else if (this.state.sort === "Price" ) {
      return defaultView.sort((a,b) => a.price - b.price)
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
