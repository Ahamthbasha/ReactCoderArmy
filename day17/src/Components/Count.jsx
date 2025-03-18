import React, { useState } from 'react'

const Count = () => {
    const [Count,setCount] = useState(0)
  return (
    <div>
      <h1>Count is :{Count}</h1>
      <button onClick={()=>setCount((Count)=>Count+1)}>Increment</button>
    </div>
  )
}

export default Count
