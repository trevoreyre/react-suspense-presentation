import React, { Component } from 'react'
import { Router } from '@reach/router'
import { FiUser, FiEdit } from 'react-icons/fi'
import { NavDrawer, NavTitle, NavSubtitle, NavLink } from 'components/Nav'
import Main from 'components/Main'
import UsersPage from 'components/UsersPage'
import PostsPage from 'components/PostsPage'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavDrawer>
          <NavTitle>Some Mediocre React App</NavTitle>
          <NavSubtitle>BETA</NavSubtitle>
          <NavLink to="/users">
            <FiUser />
            <span>Users</span>
          </NavLink>
          <NavLink to="/posts">
            <FiEdit />
            <span>Posts</span>
          </NavLink>
        </NavDrawer>
        <Main>
          <Router>
            <UsersPage path="/users" />
            <PostsPage path="/posts" />
          </Router>
        </Main>
      </div>
    )
  }
}

export default App
