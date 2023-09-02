import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootswatch/dist/yeti/bootstrap.min.css"
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App title={1} />
  </React.StrictMode>,
)
