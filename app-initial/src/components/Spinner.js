import React from 'react'

const Spinner = ({ size = '40px', centered = false } = {}) => (
  <div
    className={'spinner' + (centered ? ' centered' : '')}
    style={{ width: size, height: size }}
  />
)

export default Spinner
