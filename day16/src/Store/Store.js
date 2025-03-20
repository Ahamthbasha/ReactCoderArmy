import {configureStore} from '@reduxjs/toolkit'
import sliceReducer from "../Slicer/Slicer1"

const store=configureStore({
    reducer:{
        slice1:sliceReducer,
    }
})

export default store