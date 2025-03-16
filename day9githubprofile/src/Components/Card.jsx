import React, {useState, useEffect } from 'react'

// const Card = () => {
//     const [profile,setProfile] =useState([])

//     async function generateProfile(){
//     const response=await fetch('https://api.github.com/users?per_page=10')

//     const data=await response.json()

//     setProfile(data)

//     }

//     useEffect(()=>{
//         generateProfile()
//     },[])
//   return (

//     <div className='inpuButton'>
//         <input type="number" className='input' />
//         <button>search Profile</button>
//     <div className="profile">

//         {
//             profile.map((val)=>(
//                 <div key={val.id} className='card'>
//                     <img src={val.avatar_url} alt="" />
//                     <h2>{val.login}</h2>
//                     <a href={val.html_url} target="_blank">Profile</a>
//                 </div>
//             ))
//         }
      
//     </div>
// </div>
//   )
// }

const Card = () => {
        const [profile,setProfile] =useState([])
        const [noOfProfile,setnoOfProfile]=useState("")
        const [name,setName]=useState("")

        async function generateProfile(count){
            try{
            const ran=Math.floor(1+Math.random()*10000)
            const response=await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`)
            const data=await response.json()
            setProfile(data)
            }
            catch(error){
                console.log(error)
            }
        }

        useEffect(()=>{
            generateProfile(10)
        },[])


        async function generateProfileByName(name){
            try{
            const response=await fetch(`https://api.github.com/users/${name}`)
            const data=await response.json()
            setProfile([data])
            }
            catch(error){
                console.log(error)
            }
        }
    
        useEffect(()=>{
            generateProfileByName('petertodd')
        },[])
      return (
    
        <div>
            <div className='searchNumber'>
            <input type="text" className='input' value={noOfProfile} onChange={(e)=>setnoOfProfile(e.target.value)}/>
            <button onClick={()=>generateProfile(Number(noOfProfile))}>search By Profile</button>
            </div>
            

            <div className="searchName">

                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

                <button onClick={()=>generateProfileByName(name)}>Search By Name</button>

            </div>
        <div className="profile">
    
            {
                profile.map((val)=>(
                    <div key={val.id} className='card'>
                        <img src={val.avatar_url} alt="" />
                        <h2>{val.login}</h2>
                        <a href={val.html_url} target="_blank">Profile</a>
                    </div>
                ))
            }
          
        </div>
    </div>
      )
    }

export default Card
