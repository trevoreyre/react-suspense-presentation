import React, { Component } from 'react'
import * as api from 'api'
import Spinner from 'components/Spinner'
import Warning from 'components/Warning'
import './Post.css'

class Post extends Component {
  state = {
    authorIsLoading: true,
    authorError: '',
    author: {},
    commentsIsLoading: true,
    commentsError: '',
    comments: []
  }

  async componentDidMount() {
    const { post } = this.props
    try {
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
    } catch (error) {
      this.setState({
        authorIsLoading: false,
        authorError: 'Unable to load author',
        commentsIsLoading: false,
        commentsError: 'Unable to load comments'
      })
    }
  }

  render() {
    const {
      authorIsLoading,
      authorError,
      author,
      commentsIsLoading,
      commentsError,
      comments
    } = this.state
    const { post, ...props } = this.props

    return (
      <div className="post" {...props}>
        <div className="post-header">
          <h2 className="post-title">{post.title}</h2>
          <div className="author-info">
            {authorIsLoading ? (
              <Spinner size="40px" />
            ) : authorError ? (
              <Warning>{authorError}</Warning>
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
        <div className="post-details">
          {commentsIsLoading ? (
            <Spinner size="32px" />
          ) : commentsError ? (
            <Warning>{commentsError}</Warning>
          ) : (
            <p className="post-detail">{comments.length} Comments</p>
          )}
        </div>
      </div>
    )
  }
}

export default Post
