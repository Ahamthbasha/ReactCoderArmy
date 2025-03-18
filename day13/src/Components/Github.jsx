import React,{useState} from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'

const Github = () => {

    const {name}=useParams()
    const [profile,setProfile]=useState(null)

    async function fetchUser(){
        const response = await fetch(`https://api.github.com/users/${name}`)
        const data =await response.json()
        setProfile(data)
    }

    useEffect(()=>{
        fetchUser()
    },[])
  return (
    <div>
      <h1>Github</h1>
      <div>
        <img src={profile?.avatar_url} alt="" />
        <h1>{profile?.login}</h1>
      </div>
    </div>
  )
}

export default Github

