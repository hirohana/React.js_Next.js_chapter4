import React, { Component } from 'react'
import Message from './Message'

class App extends Component {
  input = ''

  constructor(props) {
    super(props)
    this.state = {
      title: 'input form',
      message: 'type your name',
      max: 10
    }
    this.doCheck = this.doCheck.bind(this)
  }

  doCheck(event) {
    window.alert(event.target.value +
      "は長すぎます。 (最大" + this.state.max + "文字)")
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <h4>{this.state.title}</h4>
          <Message maxlength={this.state.max} onCheck={this.doCheck} />
        </div>
      </div>
    )
  }
}

export default App