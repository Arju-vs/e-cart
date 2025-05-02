import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action return promise
export const fetchProducts = createAsyncThunk("products/fetchProducts",async ()=>{
    const result = await axios.get("https://dummyjson.com/products")
    console.log(result);
    console.log(result.data.products);
    return result.data.products
})

const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[]
    },
    reducers:{

    }
})

