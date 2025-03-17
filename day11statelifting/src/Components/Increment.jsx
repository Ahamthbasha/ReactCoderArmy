import React from 'react'
import Decrement from './Decrement'

const Increment = ({counts,setCounts}) => {

  return (
    <div>
    <button onClick={()=>setCounts(counts+1)}>Increment</button>
    <Decrement counts={counts} setCounts={setCounts}/>
    </div>
  )
}

export default Increment
