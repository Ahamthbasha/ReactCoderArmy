import React from 'react'
import { useEffect } from 'react'
import { FetchData } from '../Slicer/Slicer1'
import {useDispatch,useSelector} from "react-redux"
import CoinCard from './CoinCard'
const CoinCreate = () => {

    const dispatch=useDispatch()
    const {data,loading,error} = useSelector((state)=>state.slice1)
    useEffect(()=>{
        dispatch(FetchData(20)) //it is a function
    },[])

    if(loading){
        return <h1>Data is Loading</h1>
    }

    if(error){
        return <h1>Error has occured</h1>
    }

  return (
    <div>
      {
        data.map((value)=>{
            return <CoinCard coin={value}/>
        })
      }
    </div>
  )
}

export default CoinCreate
