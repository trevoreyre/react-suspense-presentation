import React, { Component } from 'react'
import { getUsers } from '../../api'
import Spinner from '../Spinner'
import User from '../User'
import './UserGrid.css'

class UserGrid extends Component {
  state = {
    isLoading: true,
    users: [],
    error: ''
  }

  async componentDidMount() {
    try {
      const users = await getUsers()
      this.setState({
        isLoading: false,
        users
      })
    } catch (error) {
      this.setState({
        isLoading: false,
        error
      })
    }
  }

  render() {
    const { isLoading, users, error } = this.state
    return isLoading ? (
      <Spinner />
    ) : users ? (
      <div className="user-grid">
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    ) : (
      <p>{error}</p>
    )
  }
}

export default UserGrid
