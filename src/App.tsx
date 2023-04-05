import React from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import { Plants } from './components/plants/Plants'

function App() {
  return (
    <div className="App">
      <Plants />
      <Outlet></Outlet>
    </div>
  )
}

export default App
