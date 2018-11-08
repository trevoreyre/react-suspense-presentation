import React from 'react'
import './Main.css'

const Main = ({ children, ...props }) => (
  <main className="main" {...props}>
    {children}
  </main>
)

export default Main
