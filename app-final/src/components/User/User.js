import React, { Component } from 'react'
import * as api from 'api'
import UserDetail from 'components/UserDetail'
import './User.css'

const UserBackground = () => {
  const random = Math.random() * 360
  return (
    <div
      className="user-background"
      style={{
        background: `linear-gradient(to bottom right, hsl(${random}, 100%, 60%), hsl(${random +
          40}, 100%, 60%))`
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
            {/* <img src={user.avatarHd} alt="User avatar" className="avatar" /> */}
            <img src="/user.svg" className="avatar" />
          </div>
          <div className="user-info">
            <h2 className="name">{user.name}</h2>
            <h3 className="username">@{user.username}</h3>
          </div>
        </div>
        <div className="user-footer">
          <UserDetail fetchFn={api.getUserPosts} label="Posts" id={user.id} />
          <UserDetail fetchFn={api.getUserAlbums} label="Albums" id={user.id} />
          <UserDetail fetchFn={api.getUserTasks} label="Tasks" id={user.id} />
        </div>
      </div>
    )
  }
}

export default User
