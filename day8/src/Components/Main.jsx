import React, { useEffect, useState } from 'react'
import '../css/style.css'
const Main = ({name}) => {

    const [color,setColor] = useState("black")

    // document.body.style.backgroundColor=color\

    console.log("first")
    useEffect(()=>{
        console.log("useEffect executed")
        document.body.style.backgroundColor=color
    },[color])

    console.log("second")

  return (
    <div class="fullBox">
      <h1>{name}</h1>
      <h1>background color changer</h1>
      <div className='but'>
        <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
        <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
        <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>

      </div>
    </div>
  )
}

export default React.memo(Main)
