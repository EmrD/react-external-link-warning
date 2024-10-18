import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Confirm from './confirm.jsx'
import './index.css'
import Internal from './internal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/confirm-redirection" element={<Confirm />} />
        <Route path="/internal-page" element={<Internal />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
