//create AsyncThunk

import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import { act } from "react"

//{type:"coin/fetch/pending",payload:undefined}
//{type:"coin/fetch/fulfilled",payload:data}
//{type:"coin/fetch/rejected",payload:"error_message"}

//here it does not have the slice name.If we specify the slice name it will store the data in the particular slice.To avoid the issue we dont mention or in createAsyncThunk slice name is not mentioned by that way the dispatch produced by the createAsyncThunk will going to the slice.Its purpose is to multiple slices can be used

const FetchData=createAsyncThunk(
    //action:type or payload
    'Coin/fetch',
    async(args,thunkAPI)=>{
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)

           const data=await response.json()

           return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const slicer1=createSlice({
    name:"slice1",
    initialState:{data:[],loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(FetchData.pending,(state)=>{
            state.loading=true,
            state.error=null
        })
        .addCase(FetchData.fulfilled,(state,action)=>{
            state.data=action.payload
            state.loading=false
        })
        .addCase(FetchData.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
    }
})

export default slicer1.reducer

export {FetchData}