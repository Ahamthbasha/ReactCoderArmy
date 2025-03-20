import React from 'react'
import Header from './Component/Header'
import Card from './Component/Card'
import {Provider} from "react-redux"
import stores from './Store/Store'

const App = () => {
  return (
    <Provider store={stores}>
      <Header />
      <Card />
    </Provider>
  )
}

export default App
