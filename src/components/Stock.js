import React from 'react'

// you will have the function prop passed down from its' container. They both need to be prompted by
// onClick, so in these two container it should only ever be one or the other

const Stock = (props) => (
  <div>
    <div className="card" onClick={props.addToPortfolio ? props.addToPortfolio : props.sellStock}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price}</p>
      </div>
    </div>


  </div>
);

export default Stock
