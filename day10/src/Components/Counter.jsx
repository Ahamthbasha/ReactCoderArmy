import React,{useState} from 'react'
import "../css/style.css"
const Counter = () => {

    const[count,setCount] = useState(0)
  return (
    <div className='counter'>
      <h1>Count is:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>
    </div>
  )
}

export default Counter
