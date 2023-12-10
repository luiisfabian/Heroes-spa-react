import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import "./index.css"
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { HeroesApp } from './HeroesApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HeroesApp />
  </React.StrictMode>,
)
