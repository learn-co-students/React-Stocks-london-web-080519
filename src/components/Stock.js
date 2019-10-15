import React from 'react'



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
