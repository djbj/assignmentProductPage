import React from "react"

class Product extends React.Component {
  render() {
    return (
      <div className="ProductContainer">
        <div className="Product">
        <h2>
          {this.props.name}
        </h2>
        <img src={this.props.image}/>
        <ul>
          <li>{this.props.type}</li>
          <li>{this.props.substance}</li>
          <li>{this.props.size}</li>
          <li>{this.props.numberInPack} i förpackningen</li>
        </ul>
        <div className="priceAndDeliveryTime">
          <h3>{this.props.price} Kr</h3>
          <button>Köp</button>
        </div>
        <p>
          Leveranstid {this.props.deliveryTime}
        </p>
        </div>
        <div className="hiddenText">
          <p>
            {this.props.description}
          </p>
        </div>
      </div>
    )
  }
}

export default Product
