import React from 'react'

const MyntraCard = (props) => {
  const {Cloth,Offer} = props
  return (
    <div style={{
      border:'1px solid black',
      padding:"2px"
    }}>

      
      <img src='https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product.jpg' alt="" height="200px" width="200px" />
      
    

      <div style={{textAlign:"center"}}>
        <h2>{Cloth}</h2>
        <h1>{Offer}</h1>
        <h3>shop NOw</h3>

      </div>
    </div>
  )
}

export default MyntraCard
