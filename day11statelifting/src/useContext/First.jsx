import React, { useState } from 'react'
import Second from './Second'

const First = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h1>First</h1>
      <Second counts={count} setCounts={setCount}/>
    </div>
  )
}

export default First

