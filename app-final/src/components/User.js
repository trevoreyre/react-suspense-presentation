import React, { Component, Suspense } from 'react'
import UserPosts from 'components/UserPosts'
import UserAlbums from 'components/UserAlbums'
import Img from 'components/Img'
import Spinner from 'components/Spinner'

const UserBackground = () => {
  const random = Math.random() * 360
  return (
    <div
      className="user-background"
      style={{
        background: `linear-gradient(to bottom right, hsl(${random}, 100%, 60%), hsl(${random +
          40}, 100%, 60%))`,
      }}
    />
  )
}

class User extends Component {
  render() {
    const { user, ...props } = this.props

    return (
      <div className="user" {...props}>
        <UserBackground />
        <div className="user-header">
          <div className="user-avatar">
            <Suspense
              fallback={
                <img
                  src={user.avatarPlaceholder}
                  alt="User avatar"
                  className="user-avatar-placeholder"
                />
              }
              maxDuration={100}
            >
              <Img src={user.avatarHd} alt="User avatar" className="avatar" />
            </Suspense>
          </div>
          <div className="user-info">
            <h2 className="user-name">{user.name}</h2>
            <h3 className="user-username">@{user.username}</h3>
          </div>
        </div>
        <div className="user-footer">
          <Suspense fallback={<Spinner size="44px" />} maxDuration={500}>
            <UserPosts id={user.id} />
            <UserAlbums id={user.id} />
          </Suspense>
        </div>
      </div>
    )
  }
}

export default User
