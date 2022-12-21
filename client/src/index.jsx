import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './utils/i18n'
import LanguageProvider from './context/AppContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
