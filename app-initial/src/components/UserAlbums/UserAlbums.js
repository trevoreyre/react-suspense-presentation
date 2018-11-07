import React, { Component } from 'react'
import * as api from '../../api'
import Spinner from '../Spinner'
import './UserAlbums.css'

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

    return (
      <div className="user-albums">
        {isLoading ? (
          <Spinner centered={false} />
        ) : (
          <>
            <h3 className="albums-label">Albums</h3>
            <p className="albums-value">{albums.length}</p>
          </>
        )}
      </div>
    )
  }
}

export default UserAlbums
