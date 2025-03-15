import React from 'react'



const MyntraCard = (props) => {
    const {Cloth,Offer,price} = props

    
  return (
    <div className='card' style={{
        border:"2px solid black",
        
    }}>
      <img src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" alt="" height="200px" width="200px"/>

      <div style={{
        textAlign:'center',
      }}>
        <h2>{Cloth}</h2>
        <h1>{Offer}</h1>
        <h3>shop Now</h3>
        <h4>Price:{price}</h4>
      </div>
    </div>
  )
}

export default MyntraCard
