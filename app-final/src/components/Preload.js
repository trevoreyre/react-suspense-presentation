import React from 'react'
import { userImages } from 'api'

const Preload = () => (
  <div style={{ display: 'none' }}>
    {Object.entries(userImages).map(([id, src]) => (
      <img key={id} src={src + '15x15'} alt="" />
    ))}
  </div>
)

export default Preload
