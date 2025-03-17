import React from 'react'

const Decrement = ({counts,setCounts}) => {
  return (
    <div>
      <button onClick={()=>setCounts(counts-1)}>Decrement</button>
    </div>
  )
}

export default Decrement
