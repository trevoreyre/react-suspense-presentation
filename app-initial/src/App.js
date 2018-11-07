import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
            <NavTitle>Mediocre "Enterprise" App</NavTitle>
            <NavSubtitle>(Beta)</NavSubtitle>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
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
