import React from 'react'
import MyntraCard from './components/MyntraCard'
import MyntraHeader from './components/MyntraHeader';
import MyntraFooter from './components/MyntraFooter';
import offers from "../src/utils/DummyData"
const App = () => {

  return (
    <>

    <MyntraHeader/>

    <div className='middle' style={{
        display:"flex",
        flexWrap:"wrap",
        gap:'10px'
    }}>
        {
            offers.map((off)=>(
                <MyntraCard Cloth={off.Cloth} Offer={off.Offer} price={off.price}/>
            ))
        }
    </div>
    
    <MyntraFooter />
    </>
  )
}

export default App
