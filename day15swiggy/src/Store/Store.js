import {configureStore} from "@reduxjs/toolkit"
import CartReducer from "../Slicer/Slicer1"


const stores=configureStore({
    reducer:{
        slice1:CartReducer
    }
})

export default stores