import React, { Component } from "react";

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <aside>
        <h1>My Cart</h1>
        <h2>Cart Summary</h2>
        <div className="info"></div>
        {/* <div className='buttons'>
            <button>Review</button>
        </div> */}
      </aside>
    );
  }
}

export default Cart;
