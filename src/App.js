import React, { Component } from 'react'
import List from './List'

class App extends Component{
  data = [
    "This is list sample",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ]
  constructor(props) {
    super(props)
    this.state = {
      list: this.data
    }
  }
  render() {
    return(
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">SHOW List</p>
          <List title="サンプル・リスト" data={this.data}/>
        </div>
      </div>
    
    )
  }
}

export default App