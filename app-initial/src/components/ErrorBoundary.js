import { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    error: null,
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    const { children, fallback } = this.props
    const { error } = this.state

    if (error !== null) {
      return fallback
    }
    return children
  }
}

export default ErrorBoundary
