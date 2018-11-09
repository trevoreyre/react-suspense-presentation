import React, { Suspense } from 'react'
import Spinner from 'components/Spinner'
import PostAuthor from 'components/PostAuthor'
import PostComments from 'components/PostComments'

const Post = ({ post, ...props }) => (
  <div className="post" {...props}>
    <div className="post-header">
      <h2 className="post-title">{post.title}</h2>
      <div className="author-info">
        <Suspense fallback={<Spinner size="40px" />} maxDuration={500}>
          <PostAuthor id={post.userId} />
        </Suspense>
      </div>
    </div>
    <p className="post-body">{post.body}</p>
    <div className="post-details">
      <Suspense fallback={<Spinner size="32px" />} maxDuration={500}>
        <PostComments id={post.id} />
      </Suspense>
    </div>
  </div>
)

export default Post
