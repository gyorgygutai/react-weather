import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'
import enMessages from 'messages/en'
import './global.css'

import Weather from 'components/Weather'

class Container extends Component {
  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    return (
      <IntlProvider locale="en" messages={enMessages}>
        <Weather />
      </IntlProvider >
    )
  }
}

export default Container
