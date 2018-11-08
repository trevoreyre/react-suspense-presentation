import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'

const Warning = ({ children, ...props }) => (
  <div className="warning" {...props}>
    <FiAlertTriangle />
    <span>{children}</span>
  </div>
)

export default Warning
