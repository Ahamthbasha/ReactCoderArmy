import React,{useState} from 'react'
import MyntraCard from './components/MyntraCard'
import MyntraHeader from './components/MyntraHeader';
import MyntraFooter from './components/MyntraFooter';
import offers from "../src/utils/DummyData"
const App = () => {

  const [sorting,setSorting]=useState(offers)

  const sort=()=>{
    sorting.sort((a,b)=>a.price-b.price)
    setSorting([...sorting])
    console.log(sorting)
  }

  const PriceAbove500=()=>{
    const fiveHundred=offers.filter((off)=>{
      return off.price>500
    })
    setSorting(fiveHundred)
  }

  return (
    <>

  

    <MyntraHeader/>

    <button onClick={sort}>Sort by price</button>
    <button onClick={PriceAbove500}>Price Above 500</button>
    <div className='middle' style={{
        display:"flex",
        flexWrap:"wrap",
        gap:'10px'
    }}>
        {
            sorting.map((off)=>(
                <MyntraCard Cloth={off.Cloth} Offer={off.Offer} price={off.price}/>
            ))
        }
    </div>
    
    <MyntraFooter />
    </>
  )
}

export default App
