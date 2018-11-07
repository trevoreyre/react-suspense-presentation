import React, { Component } from 'react'
import { getUsers } from 'api'
import PageTitle from 'components/PageTitle'
import Spinner from 'components/Spinner'
import Grid from 'components/Grid'
import User from 'components/User'

class UsersPage extends Component {
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
      <>
        <PageTitle>Users</PageTitle>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Grid>
            {users.map(user => (
              <User key={user.id} user={user} />
            ))}
          </Grid>
        )}
      </>
    )
  }
}

export default UsersPage
