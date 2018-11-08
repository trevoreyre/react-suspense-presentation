import React, { Component } from 'react'
import { getUsers } from 'api'
import Spinner from 'components/Spinner'
import Warning from 'components/Warning'
import Grid from 'components/Grid'
import User from 'components/User'

class UsersPage extends Component {
  state = {
    isLoading: true,
    users: [],
    error: '',
  }

  async componentDidMount() {
    try {
      const users = await getUsers()
      this.setState({
        isLoading: false,
        users,
      })
    } catch (error) {
      this.setState({
        isLoading: false,
        error: 'Unable to load users',
      })
    }
  }

  render() {
    const { isLoading, users, error } = this.state

    return isLoading ? (
      <Spinner centered />
    ) : error ? (
      <Warning>{error}</Warning>
    ) : (
      <Grid>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </Grid>
    )
  }
}

export default UsersPage
