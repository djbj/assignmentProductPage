import React from "react"
import Product from "./product"
const productsJson = require("./../products.json")

class Page extends React.Component {
  render() {
    return (
      <div>
        <h1>{productsJson.products.length} Produkter</h1>
        <div className="listOfProducts">
          { productsJson.products.map( (item, index) => {
            return <Product key={item.id} name={item.name} type={item.type} size={item.size} numberInPack={item.numberInPack} substance={item.substance} price={item.price} deliveryTime={item.deliveryTime} image={item.image} description={item.description}/>
          })}
        </div>
      </div>
    )
  }
}

export default Page
// every component needs to be able to render
