import React,{useState} from 'react'
import FoodCard from './FoodCard';

const foodItems = [
    {id: 1, food: "pizza", price: "200"},
    {id: 2, food: "burger", price: "150"},
    {id: 3, food: "pasta", price: "180"},
    {id: 4, food: "sushi", price: "250"},
    {id: 5, food: "salad", price: "120"},
    {id: 6, food: "tacos", price: "100"},
    {id: 7, food: "steak", price: "350"},
    {id: 8, food: "sandwich", price: "130"},
    {id: 9, food: "soup", price: "90"},
    {id: 10, food: "fries", price: "80"}
];

const Card = () => {
  return (
    <div style={{display:'flex',justifyContent:"center",flexWrap:"wrap",gap:"10px",alignItems:'center'}}>
      {
        foodItems.map((val)=>{
            return (
                <div key={val.id} style={{border:"1px solid black"}}>
                    <FoodCard val={val}/>
                </div>
            )
        })
      }
    </div>
  )
}

export default Card
