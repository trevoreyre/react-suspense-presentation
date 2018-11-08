import React, { Component } from 'react'
import { getUserAlbums } from 'api'
import Spinner from 'components/Spinner'

class UserAlbums extends Component {
  state = {
    isLoading: true,
    albums: [],
  }

  async componentDidMount() {
    const albums = await getUserAlbums(this.props.id)
    this.setState({
      isLoading: false,
      albums,
    })
  }

  render() {
    const { isLoading, albums } = this.state

    return (
      <div className="user-detail">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <h3 className="user-detail-label">Albums</h3>
            <p className="user-detail-value">{albums.length}</p>
          </>
        )}
      </div>
    )
  }
}

export default UserAlbums
