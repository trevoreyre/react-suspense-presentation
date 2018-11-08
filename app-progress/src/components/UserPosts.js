import React, { Component } from 'react'
import { getUserPosts } from 'api'
import Spinner from 'components/Spinner'

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
      <div className="user-detail">
        {isLoading ? (
          <Spinner size="44px" />
        ) : (
          <>
            <h3 className="user-detail-label">Posts</h3>
            <p className="user-detail-value">{posts.length}</p>
          </>
        )}
      </div>
    )
  }
}

export default UserPosts
