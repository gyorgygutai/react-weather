import React from 'react'
import swipeDownIcon from './swipeDownIcon.svg'

const Instructions = (props) => (
  <img src={swipeDownIcon} alt="Swipe down" style={styles.root} />
)

const styles = {
  root: {
    width: 60,
    height: 60,
    userSelect: 'none',
    pointerEvents: 'none',
  }
}

export default Instructions
