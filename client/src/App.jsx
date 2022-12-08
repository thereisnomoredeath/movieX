import React from 'react'
import {
  CssBaseline,
  Container,
  Box,
  ThemeProvider,
} from '@mui/material'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { Header, MovieTheme } from './components/index'
import { Home, Settings, Recommend } from './pages'

function App() {
  return (
    <ThemeProvider theme={MovieTheme}>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Box sx={{
          backgroundColor: (MovieTheme) => MovieTheme.palette.bgcolor,
        }}
        >
          <Container maxWidth='xl'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='settings' element={<Settings />} />
              <Route path='recommend' element={<Recommend />} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App