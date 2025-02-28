import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'jotai'
import 'utils/ignore'
import { ColorSchemeContextProvider } from './context/ColorSchemeContext'
import { UserDataContextProvider } from './context/UserDataContext'

// assets
import { imageAssets } from './theme/images'
import { fontAssets } from './theme/fonts'
import Router from './routes'
import { setLanguage } from './utils/localization'

const isHermes = () => !!(global as any).HermesInternal; // disable TS type checking

const App = () => {
  // state
  const [didLoad, setDidLoad] = useState(false)
  console.log('isHermes', isHermes())

  useEffect(() => {
    setLanguage('he', true);
  })

  // handler
  const handleLoadAssets = async () => {
    // assets preloading
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  // lifecycle
  useEffect(() => {
    handleLoadAssets()
  }, [])

  // rendering
  if (!didLoad) return <View />
  return (
    <Provider>
      <ColorSchemeContextProvider>
        <UserDataContextProvider>
          <Router />
        </UserDataContextProvider>
      </ColorSchemeContextProvider>
    </Provider>
  )
}

export default App
