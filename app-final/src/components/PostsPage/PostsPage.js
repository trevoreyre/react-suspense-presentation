import React, { Component } from 'react'
import { getPosts } from 'api'
import PageTitle from 'components/PageTitle'
import Spinner from 'components/Spinner'
import Warning from 'components/Warning'
import Post from 'components/Post'

class PostsPage extends Component {
  state = {
    isLoading: true,
    posts: [],
    error: ''
  }

  async componentDidMount() {
    try {
      const posts = await getPosts()
      this.setState({
        isLoading: false,
        posts
      })
    } catch (error) {
      this.setState({
        isLoading: false,
        error: 'Unable to load posts'
      })
    }
  }

  render() {
    const { isLoading, posts, error } = this.state

    return (
      <>
        <PageTitle>Posts</PageTitle>
        {isLoading ? (
          <Spinner centered />
        ) : error ? (
          <Warning>{error}</Warning>
        ) : (
          posts.map(post => <Post key={post.id} post={post} />)
        )}
      </>
    )
  }
}

export default PostsPage
