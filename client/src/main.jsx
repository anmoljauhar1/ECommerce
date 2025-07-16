import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // ✔️ Enables routing
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserProvider'  // ✔️ Global user context

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
