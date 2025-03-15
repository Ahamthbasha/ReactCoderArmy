import React from 'react'
import '../css/style.css'

const MyntraHeader = () => {
  return (
    <div className="heading">
      <img className="images" src="https://tse3.mm.bing.net/th?id=OIP.3KmDd7m8KSJrkR64QTUfNAHaEK&pid=Api&P=0&h=180" alt="" height="80px" width="70px"/>

      <div className='options'>
        <button className='but'>Men</button>
        <button className='but'>Women</button>
        <button className='but'>Kids</button>
        <button className='but'>Home And Living</button>
        <button className='but'>Beauty</button>
        <button className='but'>Studio</button>
      </div>

      <input className='searchBar' type="text" placeholder='Search for products' />

      <div className="ProfileOptions">
        <button className='pro'>Profile</button>
        <button className='pro'>Wishlist</button>
        <button className='pro'>Bag</button>
      </div>
    </div>
  )
}

export default MyntraHeader
