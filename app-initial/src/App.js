import React, { Component } from 'react'
import Spinner from './components/Spinner'
import UserGrid from './components/UserGrid'

class App extends Component {
  render() {
    return (
      <div>
        <Spinner />
        <UserGrid />
      </div>
    )
  }
}

export default App
