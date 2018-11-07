import React, { Component } from 'react'
import { Link } from '@reach/router'
import './NavDrawer.css'

export const NavTitle = ({ children }) => (
  <h2 className="nav-title">{children}</h2>
)

export const NavSubtitle = ({ children }) => (
  <h3 className="nav-subtitle">{children}</h3>
)

export const NavLink = ({ children, ...props }) => (
  <Link className="nav-link" {...props}>
    {children}
  </Link>
)

class NavDrawer extends Component {
  render() {
    return <div className="nav-drawer">{this.props.children}</div>
  }
}

export default NavDrawer
