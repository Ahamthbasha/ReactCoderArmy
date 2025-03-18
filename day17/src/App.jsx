import React from 'react'
import Count from './Components/Count'

const App = () => {
  const arr=[0,1,2,3]
  return (
    <div>
      {
        arr.map((val)=>(<Count key={val}></Count>))
      }
    </div>
  )
}

export default App
