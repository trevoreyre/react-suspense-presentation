import React from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import { getUserPosts } from 'api'

const postsResource = createResource(id => getUserPosts(id))

const UserPosts = ({ id }) => (
  <div className="user-detail">
    <h3 className="user-detail-label">Posts</h3>
    <p className="user-detail-value">{postsResource.read(id).length}</p>
  </div>
)

export default UserPosts
