import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

listPort = () => {
  return this.props.port.map(stock => {return <Stock {...stock} stock={stock} trigger={this.props.trigger}/>})
}

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.listPort()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
