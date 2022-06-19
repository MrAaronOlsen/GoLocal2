import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './app/App.jsx'
// import './root.scss'

const wrapper = document.getElementById('root')
createRoot(wrapper).render(<App />)
