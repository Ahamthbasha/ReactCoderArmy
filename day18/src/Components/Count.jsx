import Reac,{useState} from 'react'

const Count = ({value}) => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h1>{value}:{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>increment</button>
    </div>
  )
}

export default Count