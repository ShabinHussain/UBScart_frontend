import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '../src/bootstrap.min.css'
import DataShare from './context/DataShare.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataShare>
      <GoogleOAuthProvider clientId='556583885320-b23c877oemvhrupkcfuiligo3lvhj6vl.apps.googleusercontent.com'>
        <App />
        </GoogleOAuthProvider>
      </DataShare>
    </BrowserRouter>
  </React.StrictMode>,
)
