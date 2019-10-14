import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
	state = {
		stocks: [],
		portfolio: [],
		sort: "",
		filter: "All",
	};

	getStocks = () =>
		fetch("http://localhost:3000/stocks").then(resp => resp.json());

	componentDidMount() {
		this.getStocks().then(stocks => this.setState({ stocks: stocks }));
	}

	addStock = stock => {
		if (this.state.portfolio.includes(stock)) {
			null;
		} else {
			let portfolio = this.state.portfolio;
			portfolio.push(stock);
			this.setState({ portfolio: portfolio });
		}
	};

	removeStock = stock => {
		let portfolio = this.state.portfolio;
		this.setState({ portfolio: portfolio.filter(item => item !== stock) });
	};

	handleSort = event => {
		this.setState({ sort: event.target.value });
	};

	handleFilter = event => {
		this.setState({ filter: event.target.value });
	};

	filterStocks = () => {
		return this.state.filter === "All"
			? this.state.stocks
			: this.state.stocks.filter(stock => stock.type === this.state.filter);
	};

	sortStocks = stocks => {
		if (this.state.sort === "") {
			return stocks;
		} else if (this.state.sort === "Alphabetically") {
			return stocks.sort((a, b) =>
				a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
			);
		} else if (this.state.sort === "Price") {
			return stocks.sort((a, b) => a.price - b.price);
		}
	};

	render() {
		return (
			<div>
				<SearchBar
					handleSort={this.handleSort}
					sortType={this.state.sort}
					handleFilter={this.handleFilter}
					filterType={this.state.filter}
				/>

				<div className="row">
					<div className="col-8">
						<StockContainer
							stocks={this.sortStocks(this.filterStocks())}
							addStock={this.addStock}
						/>
					</div>
					<div className="col-4">
						<PortfolioContainer
							stocks={this.state.portfolio}
							removeStock={this.removeStock}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default MainContainer;
