import React from 'react'
import stores from "./Store/Store"
import {Provider} from "react-redux"
import CoinCreate from './Component/CoinCreate'
const App = () => {
  return (
    <Provider store={stores}>
      <CoinCreate />
    </Provider>
  )
}

export default App
