import React, { Component } from 'react'
import Message from './Message'
import Title from './Title'

let data = {
  title: 'React-Context',
  message: 'this is sample message'
}

const SampleContext = React.createContext(data)

class App extends Component {
  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <Title />
        <Message />
      </div>
    </div>
  }
}

export default App