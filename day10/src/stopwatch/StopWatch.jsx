import React, { useState,useRef } from 'react'
import '../css/style2.css'
const StopWatch = () => {
    const [time,setTime] =useState(0)
    const intervalRef=useRef(null)
    const [isRunning,setIsRunning]=useState(false)

    const start=()=>{
        if(!isRunning){
            intervalRef.current=setInterval(()=>{
                setTime((prevTime)=>prevTime+1)
            },1000)
        }
        setIsRunning(true)
    }

    const stop=()=>{
        if(isRunning){
        clearInterval(intervalRef.current)
        intervalRef.current=null
        setIsRunning(false)
        }
    }

    const reset=() => {
        clearInterval(intervalRef.current)
        intervalRef.current=null
        setTime(0)
    }

  return (
    <div>
      <h1>StopWatch is : {time}</h1>
      <button onClick={start}>Start</button>
      <br />
      <br />
      <button onClick={stop}>Stop</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default StopWatch
