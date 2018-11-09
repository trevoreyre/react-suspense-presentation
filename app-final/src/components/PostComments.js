import React from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import { getComments } from 'api'

const commentsResource = createResource(id => getComments(id))

const PostComments = ({ id }) => (
  <p className="post-detail">{commentsResource.read(id).length} Comments</p>
)

export default PostComments
