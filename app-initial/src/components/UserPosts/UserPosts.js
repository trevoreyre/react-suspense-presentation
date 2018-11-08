import React, { Component } from 'react'
import { getUserPosts } from 'api'
import Spinner from 'components/Spinner'
import './UserPosts.css'

class UserPosts extends Component {
  state = {
    isLoading: true,
    posts: [],
  }

  async componentDidMount() {
    const posts = await getUserPosts(this.props.id)
    this.setState({
      isLoading: false,
      posts,
    })
  }

  render() {
    const { isLoading, posts } = this.state

    return (
      <div className="user-posts">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <h3 className="posts-label">Posts</h3>
            <p className="posts-value">{posts.length}</p>
          </>
        )}
      </div>
    )
  }
}

export default UserPosts
