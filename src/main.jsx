import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import Console from './pages/Console.jsx'
import Output from './pages/Output.jsx'
import Download from './pages/Download.jsx'

import './defaultStyles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Console />}></Route>
        <Route path="/output" element={<Output />}></Route>
        <Route path="/download" element={<Download />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
