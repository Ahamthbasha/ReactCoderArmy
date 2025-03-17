import React from 'react'
import { useContext } from 'react'
import GlobalContext from './global'

const AnotherComponent = () => {
    const data=useContext(GlobalContext)
  return (
    <div>
      <h1>I am {data}</h1>
    </div>
  )
}

export default AnotherComponent
