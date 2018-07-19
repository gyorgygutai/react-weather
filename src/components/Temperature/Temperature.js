import React from 'react'
import { number } from 'prop-types'

const Temperature = ({ value = 0, ...props }) => (
  <span {...props}>
    {Math.round(value)}
    <sup>&deg;</sup>
  </span>
)

Temperature.propTypes = {
  value: number
}

export default Temperature
