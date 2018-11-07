import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FiUser, FiEdit } from 'react-icons/fi'
import NavDrawer, { NavTitle, NavSubtitle, NavLink } from 'components/NavDrawer'
import Main from 'components/Main'
import UsersPage from 'components/UsersPage'
import PostsPage from 'components/PostsPage'

class App extends Component {
  render() {
    return (
      <Router>
        <>
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
            <Switch>
              <Route path="/users" component={UsersPage} />
              <Route path="/posts" component={PostsPage} />
            </Switch>
          </Main>
        </>
      </Router>
    )
  }
}

export default App
