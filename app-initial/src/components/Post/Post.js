import React, { Component } from 'react'
import * as api from 'api'
import Spinner from 'components/Spinner'
import './Post.css'

const PostBackground = () => {
  const random = Math.random() * 360
  return (
    <div
      className="post-background"
      style={{
        background: `linear-gradient(to bottom right, hsl(${random}, 100%, 70%), hsl(${random +
          40}, 100%, 70%))`
      }}
    />
  )
}

class Post extends Component {
  state = {
    authorIsLoading: true,
    author: {},
    commentsIsLoading: true,
    comments: []
  }

  async componentDidMount() {
    const { post } = this.props
    const [author, comments] = await Promise.all([
      api.getUser(post.userId),
      api.getComments(post.id)
    ])
    this.setState({
      authorIsLoading: false,
      author,
      commentsIsLoading: false,
      comments
    })
  }

  render() {
    const { authorIsLoading, author, commentsIsLoading, comments } = this.state
    const { post, ...props } = this.props

    return (
      <div className="post" {...props}>
        <PostBackground />
        <div className="post-header">
          {/* <div className="post-avatar">
            <img src={post.avatarHd} alt="Post avatar" className="avatar" />
          </div> */}
          <div className="post-info">
            <h2 className="title">{post.title}</h2>
            <div className="author-info">
              {authorIsLoading ? (
                <Spinner centered={false} />
              ) : (
                <>
                  <img
                    src={author.avatarHd}
                    alt="Author avatar"
                    className="author-avatar"
                  />
                  <h3 className="author-name">{author.name}</h3>
                </>
              )}
            </div>
          </div>
          <p className="post-body">{post.body}</p>
        </div>
        <div className="post-details">
          {commentsIsLoading ? (
            <Spinner centered={false} />
          ) : (
            <p className="post-detail">{comments.length} Comments</p>
          )}
        </div>
      </div>
    )
  }
}

export default Post
