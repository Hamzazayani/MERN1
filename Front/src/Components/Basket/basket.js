import React from 'react'
import "../Basket/basket.css"



function basket() {
  return (
    <div> 
<div className="maadeshtaawedha">

  <div className="container baskett">
    <h1>Item Basket</h1>
    <div className="item-list">
      <div className="item">
        <div className="item-details">
          <div className="item-name">Item 1</div>
          <div className="item-price">$10.00</div>
        </div>
        <div className="item-controls">
          <button className="control-button">-</button>
          <span className="item-quantity">1</span>
          <button className="control-button">+</button>
        </div>
      </div>
      {/* Add more items with +/- buttons as needed */}
    </div>
    <div className="total">
      <div className="total-label">Total:</div>
      <div className="total-price">$10.00</div>
    </div>
    <button className="next-button">Next</button>
  </div>
</div>


    </div>
  )
}

export default basket