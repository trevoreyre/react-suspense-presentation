import React, { Component, Suspense } from 'react'
import { Router } from '@reach/router'
import { FiUser, FiEdit } from 'react-icons/fi'
import { NavDrawer, NavTitle, NavSubtitle, NavLink } from 'components/Nav'
import Main from 'components/Main'
import Preload from 'components/Preload'
import Spinner from 'components/Spinner'

const UsersPage = React.lazy(() => import('components/UsersPage'))
const PostsPage = React.lazy(() => import('components/PostsPage'))

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
          <Suspense fallback={<Spinner centered />} maxDuration={500}>
            <Router>
              <UsersPage path="/users" />
              <PostsPage path="/posts" />
            </Router>
          </Suspense>
        </Main>
        <Preload />
      </div>
    )
  }
}

export default App
