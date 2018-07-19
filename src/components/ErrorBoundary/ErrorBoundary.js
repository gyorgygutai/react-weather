import React, { Component } from 'react'
import { Node } from 'prop-types'

class ErrorBoundary extends Component {
  state = {
    error: null
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    return error ? <div>Fuck</div> : children
  }
}

ErrorBoundary.propTypes = {
  children: Node
}

export default ErrorBoundary
