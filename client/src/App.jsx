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
  HttpLink,
  ApolloLink,
  from,
} from '@apollo/client'

import { Header, MovieTheme } from './components/index'
import { Home, Settings, Recommend } from './pages'
import { LanguageContext } from './context/languageContext'

function App() {
  const { state } = React.useContext(LanguageContext)

  const httpLink = new HttpLink({ uri: 'http://localhost:4000/' })
  const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty('header') ? operation.getContext().header : {}
    operation.setContext({
      headers: {
        ...customHeaders,
        locale: state.locale,
      },
    })
    return forward(operation)
  })

  const client = new ApolloClient({
    link: from([ localeMiddleware, httpLink ]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

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
                <Route path='recommend' element={<Recommend />} />
              </Routes>
            </Container>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App