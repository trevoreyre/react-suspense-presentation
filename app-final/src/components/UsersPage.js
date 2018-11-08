import React, { Component, Suspense } from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import { getUsers } from 'api'
import Spinner from 'components/Spinner'
import Grid from 'components/Grid'
import User from 'components/User'

const usersResource = createResource(getUsers)

class UsersPage extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner centered />}>
        <Grid>
          {usersResource.read().map(user => (
            <User key={user.id} user={user} />
          ))}
        </Grid>
      </Suspense>
    )
  }
}

export default UsersPage
