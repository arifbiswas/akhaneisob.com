import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const getAllProducts = createAsyncThunk("products/allProducts",async() =>{
   try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
    // console.log(response.data.products);
     return response.data.products
   } catch (error) {
    console.log(error);
    return error.message
   }
})


const initialState = {
    products: [],
    status : "",
    loading: false,
    error : false,
    error: null,
}

export const productsReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
   extraReducers : (builder) =>{
        builder.addCase(getAllProducts.pending,(state,action)=>{
            return state ={
                ...state,
               status : "pending",
            loading : true,
           error : false,
            error : null
            }
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            return state ={
                ...state,
            products : action.payload,
            status : "fulfilled",
            loading : false,
            error : false,
            error : null
            }
        })
        .addCase(getAllProducts.rejected,(state,action)=>{
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

export default productsReducer.reducer