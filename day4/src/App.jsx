import React from 'react'

const App = () => {
  const names="Basha"

  const obj={
    age:30,
    salary:10000
  }

  const obj2={
    backgroundColor:"black",
    color:"pink",
    fontSize:"30px"
  }

  const greet=()=>{
    return <h1>good morning</h1>
  }

  const bye=() => {
    return <h1>bye</h1>
  }

  const newElement2=greet()
  const newElement3=bye()

  return (
    <div>
      <h1 id='first' className='second'>Hello coder army{names}</h1>
      <h2>{obj.age} and {obj.salary}</h2>
{/* create an attribute it will show as an string but when i use {} and pass the value or pass as the number we use {23} */}
      <h3 money={23}>basha</h3>
{/* style attributes requires object */}
      <h4 style={obj2}>Remo</h4>

{/* call the function the element will display in the page */}
      {/* {greet()}

      {bye()} */}

{/* use the function return inside that */}

{newElement2}
{newElement3}
    </div>
  )
}

export default App
