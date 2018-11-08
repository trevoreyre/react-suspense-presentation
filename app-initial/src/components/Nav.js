import React from 'react'
import { Link } from '@reach/router'

export const NavTitle = ({ children }) => (
  <h2 className="nav-title">{children}</h2>
)

export const NavSubtitle = ({ children }) => (
  <h3 className="nav-subtitle">{children}</h3>
)

export const NavLink = ({ ...props }) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: 'nav-link' + (isCurrent ? ' active' : ''),
      }
    }}
  />
)

export const NavDrawer = ({ children }) => (
  <div className="nav-drawer">{children}</div>
)
