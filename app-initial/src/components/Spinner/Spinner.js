import React from 'react'
import './Spinner.css'

const Spinner = ({ width = '40px', height = '40px', centered = true } = {}) => (
  <div
    className="spinner"
    style={{ width, height, margin: centered ? '0 auto' : 0 }}
  />
)

export default Spinner
