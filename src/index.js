import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from 'containers/AppContainer'

require('dotenv').config()

console.log(process.env.OPENWEATHERMAP_API_KEY)

const isDev = process.env.NODE_ENV === 'development'
const hideSplashScreen = () => document.getElementById('splash').setAttribute('class', 'leaving')

setTimeout(hideSplashScreen, isDev ? 500 : 1000)

ReactDOM.render(<AppContainer />, document.getElementById('root'))

console.log(process.env)
