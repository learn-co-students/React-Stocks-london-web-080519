import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks : [],
    portfolio: [],
    sortType: null,
    filterType: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks').then(resp=> resp.json()).then(data=> this.setState({stocks: data}))
  }

  // --- adding and removing from portfolio --- //
  
  addToPortfolio = (e, stockToAdd)=>{
    console.log(stockToAdd)
    this.setState({
      portfolio: [...this.state.portfolio, stockToAdd]
    })
  }
  
  removeFromPortfolio = (e, stockToRemove)=> {
    this.setState({
      portfolio: this.state.portfolio.map(stock=>{
        if (stock !== stockToRemove){
          return stock
        } else {
          return null
        }
      })
      // portfolio: this.state.portfolio.map(stock=>{stock !==stockToRemove ? stock : null})
    })
  }


  // --- sorting === //
  changeSortType=(type)=>{
    this.setState({
      sortType: type
    })
  }  

  sortStocks = (filteredStocks) => {
    if (this.state.sortType === null) {
      return filteredStocks
    } else if (this.state.sortType === "price") {
      return filteredStocks.sort((a,b) => b.price - a.price)
    } else if (this.state.sortType === "alphabetical") {
      return filteredStocks.sort((a,b) => a.name.localeCompare(b.name))
    }
  } 

  // --- filtering --- //

  changeFilterType=(type)=>{
    this.setState({
      filterType: type
    })
  }

  filteredStocks=()=> {
    if (this.state.filterType === null){
      return this.state.stocks
    } else {
      return this.state.stocks.filter(stock=> stock.type === this.state.filterType)
    }
  }

  // ---- rendering --- //

  render() {

    const filteredAndSortedHogs = this.sortStocks(this.filteredStocks())

    return (
      <div>
        <Header/>
        <MainContainer stocks={filteredAndSortedHogs} addToPortfolio={this.addToPortfolio} portfolio = {this.state.portfolio}
        removeFromPortfolio={this.removeFromPortfolio}
        changeSortType={this.changeSortType}
        changeFilterType={this.changeFilterType}/>
      </div>
    );
  }
}

export default App;
