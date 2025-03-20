import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { CustomIncreaser } from '../Slicer/Slicer1'
const CustomCounter = () => {
    const [value,setNumber]=useState("")

    const dispatch=useDispatch()

    const handleClick=()=>{
        dispatch(CustomIncreaser(value))
    }
  return (
    <div>
      <input type="number" value={value} onChange={(e)=>setNumber(parseInt(e.target.value))||0} />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default CustomCounter
