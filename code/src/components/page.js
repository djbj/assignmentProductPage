import React from "react"
import Product from "./product"
// const productsJson = require("./../products.json")


class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productsJson: []
    }
  }

componentDidMount() {
  fetch("http://localhost:8080/products").then(response => {
    return response.json()
  }).then(json => {
    console.log("Hello json", json)
    this.setState({
      productsJson: json
    })
  })
}


  render() {
    return (
      <div>
        <h1>{this.state.productsJson.length} Produkter</h1>
        <div className="listOfProducts">
          { this.state.productsJson.map( (item, index) => {
            return <Product key={item.id} name={item.name} type={item.type} size={item.size} numberInPack={item.numberInPack} substance={item.substance} price={item.price} deliveryTime={item.deliveryTime} image={item.image} description={item.description}/>
          })}
        </div>
      </div>
    )
  }
}

export default Page
// every component needs to be able to render
