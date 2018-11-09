import React, { Suspense } from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import { getUsers } from 'api'
import Spinner from 'components/Spinner'
import Grid from 'components/Grid'
import User from 'components/User'

const usersResource = createResource(getUsers)

const UsersPage = () => (
  <Suspense fallback={<Spinner centered />} maxDuration={500}>
    <Grid>
      {usersResource.read().map(user => (
        <User key={user.id} user={user} />
      ))}
    </Grid>
  </Suspense>
)

export default UsersPage
