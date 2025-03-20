import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Increment,Decrement,Reset } from '../Slicer/Slicer1'
const Counting = () => {

    const count=useSelector((state)=>state.slice1.count)
    const dispatch=useDispatch()

    console.log(Increment())

  return (
    <div>
      <h1>Counter is{count}</h1>
      <button onClick={()=>dispatch(Increment())}>Increment</button>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
      <button onClick={()=>dispatch(Reset())}>Reset</button>
    </div>
  )
}

export default Counting
