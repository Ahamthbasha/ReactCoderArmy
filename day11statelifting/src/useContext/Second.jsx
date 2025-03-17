import React from 'react'
import Third from './Third'

const Second = ({counts,setCounts}) => {
  return (
    <div>
      <h2>Second</h2>
      <Third counts={counts} setCounts={setCounts}/>
    </div>
  )
}

export default Second
