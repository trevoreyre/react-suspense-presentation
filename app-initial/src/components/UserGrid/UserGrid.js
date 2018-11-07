import React, { Component } from 'react'
import { getUsers } from '../../api'
import Spinner from '../Spinner'
// import User from '../User'
import './UserGrid.css'

const User = React.lazy(() => import('../User'))

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

    return (
      <div className="user-grid">
        <React.Suspense fallback={<Spinner />}>
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <p>{error}</p>
          ) : (
            users.map(user => <User key={user.id} user={user} />)
          )}
        </React.Suspense>
      </div>
    )
  }
}

export default UserGrid
