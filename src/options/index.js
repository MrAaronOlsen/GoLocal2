import React from 'react'
import ReactDOM from 'react-dom'

import App from './app/App.jsx'
import './root.scss'

const wrapper = document.getElementById('root')
wrapper ? ReactDOM.render(<App />, wrapper) : false