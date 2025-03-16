import React,{useRef, useState} from 'react'

const Count = () => {

    const[count,setCount] =useState(0)
    let money=useRef(0)

  return (
    <div>
      <h1>count is : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>

      <h1>money is : {money.current}</h1>
      <button onClick={()=>money.current=money.current+1}>Increment</button>
    </div>
  )
}

export default Count
