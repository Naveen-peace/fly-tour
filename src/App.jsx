import React from 'react'
import RoutePath from './routers/RoutePath'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/style.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <RoutePath />
      </BrowserRouter>
    </div>
  )
}

export default App