import React from 'react'

const FullScreen = ({ style, ...props }) => (
  <div {...props} style={{ ...styles.root, ...style }} />
)

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'stretch'
  }
}

export default FullScreen
