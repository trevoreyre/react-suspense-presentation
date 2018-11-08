import React from 'react'

const Main = ({ children, ...props }) => (
  <main className="main" {...props}>
    {children}
  </main>
)

export default Main
