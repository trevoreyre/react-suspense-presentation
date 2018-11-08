import React, { Component } from 'react'
import { getUsers } from 'api'
import Spinner from 'components/Spinner'
import Grid from 'components/Grid'
import User from 'components/User'

class UsersPage extends Component {
  state = {
    isLoading: true,
    users: [],
  }

  async componentDidMount() {
    const users = await getUsers()
    this.setState({
      isLoading: false,
      users,
    })
  }

  render() {
    const { isLoading, users } = this.state

    return isLoading ? (
      <Spinner centered />
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
