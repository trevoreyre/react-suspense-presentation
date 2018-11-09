import React, { Suspense } from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import { getPosts } from 'api'
import Spinner from 'components/Spinner'
import Post from 'components/Post'

const postsResource = createResource(getPosts)

const PostsPage = () => (
  <Suspense fallback={<Spinner centered />} maxDuration={500}>
    {postsResource.read().map(post => (
      <Post key={post.id} post={post} />
    ))}
  </Suspense>
)

export default PostsPage
