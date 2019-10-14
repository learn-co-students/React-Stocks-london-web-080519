import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = { 
    stocks : [],
    portfolio : [], 
    sortType: '', 
    filterType: 'All'
  }


  componentDidMount() {
    fetch('http://localhost:3000/stocks').then(resp => resp.json()).then(stocks => this.setState({ stocks}))
  }
  
  removeFromPortfolio = (stock) => {
    let newPortfolio = this.state.portfolio.filter(portStock => portStock.id !== stock.id)
    this.setState({ portfolio: newPortfolio})
  }

  addToPortfolio = (stock) => {
    if (this.state.portfolio.includes(stock)) {
      alert("you already have this stock in your portfolio")
    } else {
    this.setState({portfolio: [...this.state.portfolio, stock]})}
  }

  onFilterClick = (event) => {
    this.setState({ filterType: event.target.value})
  }

  onSortTypeClick = (event) => { 
    this.setState({ sortType: event.target.value})
  }

  applySortType = (array) => {
    if (this.state.sortType === '') return array
    if (this.state.sortType === "Alphabetically") return array.sort((a,b) => a.name.localeCompare(b.name))
    if (this.state.sortType === "Price") return array.sort((a,b) => a.price - b.price)
  }

  render() {

    const filteredStocks = this.state.filterType === 'All'? [...this.state.stocks] : this.state.stocks.filter(stock => stock.type === this.state.filterType)
    const filteredAndSortedStocks = this.applySortType(filteredStocks)
    
    return (
      <div>
        <SearchBar sortType={this.state.sortType} onSortTypeClick={this.onSortTypeClick} onFilterClick={this.onFilterClick} />

          <div className="row">
            <div className="col-8">

              <StockContainer addToPortfolio={this.addToPortfolio} stocks={filteredAndSortedStocks} />

            </div>
            <div className="col-4">

              <PortfolioContainer removeFromPortfolio={this.removeFromPortfolio} portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
