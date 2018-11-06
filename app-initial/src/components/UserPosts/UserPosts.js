import React, { Component } from 'react'
import * as api from '../../api'
import Spinner from '../Spinner'

class UserPosts extends Component {
  state = {
    isLoading: true,
    posts: []
  }

  async componentDidMount() {
    const posts = await api.getUserPosts(this.props.id)
    this.setState({
      isLoading: false,
      posts
    })
  }

  render() {
    const { isLoading, posts } = this.state

    return isLoading ? (
      <Spinner />
    ) : (
      <>
        <h3 className="posts-label">Posts</h3>
        <p>{posts.length}</p>
      </>
    )
  }
}

export default UserPosts
