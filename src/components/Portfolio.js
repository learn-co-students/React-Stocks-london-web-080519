import React from 'react'

const Portfolio = (props) => (
  <div>
      {props.portfolio ? 
    <div className="card">
        <div className="card-body"  onClick={(e)=>props.removeFromPortfolio(e, props.portfolio)} >
            <h5 className="card-title">{props.portfolio.name}</h5>
            <p className="card-text">{props.portfolio.ticker}: {props.portfolio.price }</p>
        </div>
    </div>
    : null }

  </div>
);

export default Portfolio
