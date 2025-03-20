import React from 'react'
import Counting from './Component/Counting'
import { Provider } from 'react-redux'
import stores from './Stores/stores'
const App = () => {
  return (
    <Provider store={stores}>
      <Counting />
    </Provider>
  )
}

export default App
