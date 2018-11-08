import React, { Component } from 'react'
import { getPosts } from 'api'
import Spinner from 'components/Spinner'
import Post from 'components/Post'

class PostsPage extends Component {
  state = {
    isLoading: true,
    posts: [],
  }

  async componentDidMount() {
    const posts = await getPosts()
    this.setState({
      isLoading: false,
      posts,
    })
  }

  render() {
    const { isLoading, posts } = this.state

    return isLoading ? (
      <Spinner centered />
    ) : (
      posts.map(post => <Post key={post.id} post={post} />)
    )
  }
}

export default PostsPage
