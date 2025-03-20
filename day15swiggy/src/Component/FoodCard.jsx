import React,{useState} from 'react'
import { addItems,removeItems } from '../Slicer/Slicer1'
import {useDispatch} from 'react-redux'

const FoodCard = ({val}) => {
    const [inCart,setInCart] = useState(false)

    const dispatch=useDispatch()

    const handleClick=()=>{
        if(inCart){
            dispatch(removeItems())
            setInCart(false)
        }else{
            dispatch(addItems())
            setInCart(true)
        }
    }
  return (
    <div>
    <h1>{val.food}</h1>
    <h2>{val.price}</h2>
    <button onClick={handleClick}>{inCart ? "Remove" : "Add"}</button>
    </div>
  )
}

export default FoodCard
