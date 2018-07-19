import React from 'react'
import { object } from 'prop-types'

const SecondaryText = ({ style, ...props }) => (
  <span {...props} style={{ ...styles.root, ...style }} />
)

SecondaryText.propTypes = {
  style: object
}

SecondaryText.defaultProps = {
  style: {}
}

const styles = {
  root: {
    fontSize: '.95rem',
    color: 'rgba(255, 255, 255, .8)'
  }
}

export default SecondaryText
