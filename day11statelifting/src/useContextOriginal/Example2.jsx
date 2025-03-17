import React, { useContext } from 'react'
import Example3 from './Example3'
import { context } from './Example1'

const Example2 = () => {
    const {setCount} = useContext(context)
  return (
    <div>
      <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
      <Example3 />
    </div>
  )
}

export default Example2
