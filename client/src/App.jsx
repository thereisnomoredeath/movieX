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
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

import { Header, MovieTheme } from './components/index'
import { Home, Settings } from './pages'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

function App() {
  return (
    <ApolloProvider client={client}>
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
                <Route path='' element={<Home />} />
                <Route path='settings' element={<Settings />} />
              </Routes>
            </Container>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App