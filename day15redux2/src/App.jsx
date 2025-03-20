import React from 'react'
import Counting from './Component/Counting'
import { Provider } from 'react-redux'
import stores from './Stores/stores'
import { reactslicer } from './Slicer/Slicer1'
import CustomCounter from './Component/CustomCounter'
const App = () => {
  console.log(reactslicer)
  return (
    <Provider store={stores}>
      <Counting />
      <br />
      <CustomCounter />
    </Provider>
  )
}

export default App
