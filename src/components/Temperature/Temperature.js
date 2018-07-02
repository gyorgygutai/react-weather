import React from 'react'

const Temperature = ({ value = 0, ...props }) => (
  <span {...props}>
    {value}
    &deg;
  </span>
)

export default Temperature
