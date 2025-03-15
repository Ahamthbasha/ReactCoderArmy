import React,{useCallback, useEffect, useState} from 'react'
import '../css/style.css'
const PasswordGenerator = () => {
    const [Password,setPassword]=useState("")
    const [length,setLength]=useState(0)
    const [noChanged,setNoChanged]=useState(false)
    const [charChanged,setCharChanged]=useState(false)

    const generatePassword=useCallback(() => {
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if(noChanged){
            str+="0123456789"
        }

        if(charChanged){
            str+="~!@#$%^&*()_`="
        }

        let pass=""
        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass)
    },[length,noChanged,charChanged])

    useEffect(()=>{
        generatePassword()
        console.log(Password)
    },[generatePassword])

  return (
    <div>
      <h1>Password is:{Password}</h1>

      <div>
        <input type="range" min={5} max={100} value={length} onChange={(e)=>setLength(e.target.value)}/>
        <label> length is :{length}</label>

        <input type="checkbox" defaultChecked={noChanged} onChange={()=>setNoChanged(!noChanged)}/>
        <label> Number</label>

        <input type="checkbox" defaultChecked={charChanged} onChange={()=>setCharChanged(!charChanged)}/>
        <label>Character</label>
      </div>
    </div>
  )
}

export default PasswordGenerator
