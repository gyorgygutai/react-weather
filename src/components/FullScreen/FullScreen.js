import React from 'react'
import Flex from 'flexbox-react'

const FullScreen = (props) => (
  <Flex
    {...props}
    height="100%"
    alignItems="stretch"
  />
)

export default FullScreen
