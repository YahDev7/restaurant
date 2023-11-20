import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { SidebarProvider } from './context/sidebar.context.jsx'
import { SidebarCarritoProvider } from './context/sidebarCarrito.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <HashRouter>
    <SidebarProvider>
    <SidebarCarritoProvider>

      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </SidebarCarritoProvider>
    </SidebarProvider>
  </HashRouter>
)
