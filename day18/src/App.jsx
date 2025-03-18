import React,{useState} from 'react'
import Count from './Components/Count'

const App = () => {
  const [language,setLanguage] = useState(["Ts","Js","Java"])

  const handleClick=(()=>{
    setLanguage(["C++",...language])
  })

  const VDOM = <h1>Hello coder army</h1>
  console.log("virtual dom",VDOM)

  const RDOM=document.createElement("h1")
  console.log("RDOM",RDOM)
  
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
      {
        language.map((value,index)=>(
          // <Count key={index} value={value}></Count>
          <Count key={value} value={value}></Count>
        ))
      }
      <button onClick={handleClick}>AddLanguage</button>
    </div>
  )
}

export default App
