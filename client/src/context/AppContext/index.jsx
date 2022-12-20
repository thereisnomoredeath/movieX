import React from 'react'
import { LanguageContext } from '../languageContext'

const lang = window.localStorage?.getItem('i18nextLng')
const init = { locale: lang } || { locale: 'en' }

const initialState = init

const reducer = (state, action) => {
  switch (action.type) {
    case 'english':
      return { locale: 'en' }
    case 'ukrainian':
      return { locale: 'uk' }
    default:
      throw new Error('Something went wrong...')
  }
}

function LanguageProvider({ children }) {
  const [ state, dispatch ] = React.useReducer(reducer, initialState)
  const values = React.useMemo(() => ({ state, dispatch }), [ state, dispatch ])
  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider