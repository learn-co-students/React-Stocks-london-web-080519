import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stockData: [],
    portfolio: [],
    filterState: 'all',
    sortState: 'none'
  }

componentDidMount () {
  this.getStocks()
}

getStocks = () => {
  fetch(`http://localhost:3000/stocks`).then(response => (response.json())).then(data => this.setState({stockData: data}))
}

filterSort = () => {



  let filtered = this.state.stockData.filter((stock) => {
    if (this.state.filterState === 'all'){
      return stock
    }else if (stock.type === this.state.filterState){
        return stock
    }
})
if (this.state.sortState == 'alphabetically') {
return filtered.sort((a,b) => a.name.localeCompare(b.name))
}else if (this.state.sortState ==='price') {
  console.log('I am filterSort!')
  return filtered.sort((a,b) => a.price - b.price )
}else {return filtered}

}

setFilter = (newFilter) => {
  this.setState({
    filterState: newFilter
  })
}

setSort = (newSort) => {
  this.setState({
    sortState: newSort
  })
}

portfolioTrigger = (stock) => {

if (this.state.portfolio.includes(stock)) {
  
    let newPort = this.state.portfolio.filter((pStock) => {
      if (pStock !== stock){return pStock} })
    this.setState({
        portfolio: newPort
      })
      console.log(`newPort ${newPort}`)
  }else { 
    let addPort = [...this.state.portfolio, stock]
    this.setState({
      portfolio: addPort
    })
    console.log(`addPort ${addPort}`)
  } 

  console.log(stock)

} 


  render() {
    return (
      <div>
        <SearchBar setFilter={this.setFilter} setSort={this.setSort} sortState={this.state.sortState} filterState={this.state.filterState}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stockData={this.filterSort()} trigger={this.portfolioTrigger}/>

            </div>
            <div className="col-4">

              <PortfolioContainer port={this.state.portfolio} trigger={this.portfolioTrigger} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
