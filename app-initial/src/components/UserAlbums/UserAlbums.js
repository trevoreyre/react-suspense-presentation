import React, { Component } from 'react'
import * as api from '../../api'
import Spinner from '../Spinner'

class UserAlbums extends Component {
  state = {
    isLoading: true,
    albums: []
  }

  async componentDidMount() {
    const albums = await api.getUserAlbums(this.props.id)
    this.setState({
      isLoading: false,
      albums
    })
  }

  render() {
    const { isLoading, albums } = this.state

    return isLoading ? (
      <Spinner />
    ) : (
      <>
        <h3 className="albums-label">Albums</h3>
        <p>{albums.length}</p>
      </>
    )
  }
}

export default UserAlbums
