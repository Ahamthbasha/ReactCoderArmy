import React,{useState} from 'react'
import Increment from './Increment'

const Count = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h1>Parent Count:{count}</h1>
      <Increment counts={count} setCounts={setCount}/>
    </div>
  )
}

export default Count
