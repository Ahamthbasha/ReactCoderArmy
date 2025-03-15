import React from 'react'
import First from './Components/first'
import MyntraCard from './Components/myntraCard'

const App = () => {

  const offers = [
    { Cloth: "Jeans", Offer: "30-60% off" },
    { Cloth: "T-Shirt", Offer: "20-50% off" },
    { Cloth: "Jacket", Offer: "10-40% off" },
    { Cloth: "Sweater", Offer: "25-70% off" },
    { Cloth: "Dress", Offer: "15-65% off" },
    { Cloth: "Hoodie", Offer: "20-45% off" },
    { Cloth: "Shorts", Offer: "50-90% off" },
    { Cloth: "Skirt", Offer: "30-55% off" },
    { Cloth: "Blouse", Offer: "35-75% off" },
    { Cloth: "Sweatpants", Offer: "40-80% off" }
  ];
  
  return (
    <div style={{display:'flex',gap:'10px',flexWrap:"wrap"}}>
{/* First approach */}
      {/* <First name="basha"/> it is like a function */}
      {/* <First name={["basha","ahamath"]}/> */}

{/* second approach */}
      {/* <MyntraCard Cloth="T-Shirt" Offer="20-80% off"/>
      <MyntraCard Cloth="Jeans"  Offer="30-60% off"/>
      <MyntraCard Cloth="Jacket" Offer= "10-50% off"/>
      <MyntraCard Cloth= "Sweater"  Offer= "25-70% off"/>
      <MyntraCard Cloth= "Hoodie"  Offer= "20-40% off"/>
      <MyntraCard Cloth= "Skirt"  Offer= "30-55% off"/>
      <MyntraCard Cloth= "Dress"  Offer= "15-65% off"/>
      <MyntraCard Cloth= "Sweater"  Offer= "25-70% off"/> */}

{/* third approach efficient .It always returns a value.Map returns as an array.So it works.It representation will be like [<Card/>,<Card/>,<Card/>,....].When you use like this each card should have unique key property.The errror won;t be shown in that page.It shown in console*/}

        {
          offers.map((off,index)=>(
            <MyntraCard key={index} Cloth={off.Cloth} Offer={off.Offer}/>
          ))
        }

    </div>
  )
}

export default App
