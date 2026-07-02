import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CheckoutRedirect from './pages/CheckoutRedirect.jsx'
import WhatsAppRedirect from './pages/WhatsAppRedirect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ir" element={<CheckoutRedirect />} />
        <Route path="/wpp" element={<WhatsAppRedirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
