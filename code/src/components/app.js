import React from "react"
import Page from "./page"
// const productsJson = require("./../products.json")

// console.log("Products: (Remove this line in app.js!)", productsJson)

class App extends React.Component {
  render() {
    return (
      <div className="App">        
        <Page/>
      </div>
    )
  }
}

export default App
