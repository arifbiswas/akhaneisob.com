import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const getAllCategories = createAsyncThunk("category/allCategories",async() =>{
   try {
    const response = await axios.get("http://localhost:3000/api/categories")
    // console.log(response.data.category);
     return response.data.category
   } catch (error) {
    console.log(error);
    return error.message
   }
})


const initialState = {
    categories: [],
    status : "",
    loading: false,
    error : false,
    error: null,
}

export const categoryReducer = createSlice({
    name: 'category',
    initialState,
    reducers: {
    },
   extraReducers : (builder) =>{
        builder.addCase(getAllCategories.pending,(state,action)=>{
            return state ={
                ...state,
               status : "pending",
            loading : true,
           error : false,
            error : null
            }
        })
        .addCase(getAllCategories.fulfilled,(state,action)=>{
            return state ={
                ...state,
            categories : action.payload,
            status : "fulfilled",
            loading : false,
            error : false,
            error : null
            }
        })
        .addCase(getAllCategories.rejected,(state,action)=>{
            return state ={
                ...state,
                status : "rejected",
                loading : false,
                error : true,
                error : action.payload
            }
        })
    }
})

// Action creators are generated for each case reducer function

export default categoryReducer.reducer;