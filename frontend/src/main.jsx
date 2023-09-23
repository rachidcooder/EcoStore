import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EcoProvider from "./context/Provider.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <EcoProvider>
    <App />
  </EcoProvider>,
)
