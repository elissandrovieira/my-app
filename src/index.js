import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider, createTheme} from '@mui/material/styles'

import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#604647'
    },
    secondary: {
      main: '#2596be'
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
