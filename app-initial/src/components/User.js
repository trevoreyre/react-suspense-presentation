import React, { Component } from 'react'
import UserPosts from 'components/UserPosts'
import UserAlbums from 'components/UserAlbums'

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
            <img src={user.avatarHd} alt="User avatar" className="avatar" />
          </div>
          <div className="user-info">
            <h2 className="user-name">{user.name}</h2>
            <h3 className="user-username">@{user.username}</h3>
          </div>
        </div>
        <div className="user-footer">
          <UserPosts id={user.id} />
          <UserAlbums id={user.id} />
        </div>
      </div>
    )
  }
}

export default User
