import React,{useState} from 'react'
import Main from './Main'
const Counter = () => {

    const [count,setCount]=useState(0)


  return (
    <div>
        <div className="counter">
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
      <Main name={count}/>
    </div>
  )
}

export default Counter
