import React, { Component } from 'react'
import UserPosts from '../UserPosts'
import UserAlbums from '../UserAlbums'
import UserTasks from '../UserTasks'
import './User.css'

class User extends Component {
  render() {
    const { user, ...props } = this.props

    return (
      <div className="user" {...props}>
        <div
          className="user-background"
          style={{ background: `hsl(${Math.random() * 360}, 100%, 70%)` }}
        />
        <div className="user-header">
          <div className="user-avatar">
            <img src={user.avatarHd} alt="User avatar" className="avatar" />
          </div>
          <div className="user-info">
            <h2 className="name">{user.name}</h2>
            <h3 className="username">@{user.username}</h3>
          </div>
        </div>
        <div className="user-footer">
          <UserPosts id={user.id} />
          <UserAlbums id={user.id} />
          <UserTasks id={user.id} />
        </div>
      </div>
    )
  }
}

export default User
