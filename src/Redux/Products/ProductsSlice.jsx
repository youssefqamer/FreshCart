// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import useGetData from '../../Hooks/UseGetData';

// const initialState={
//     allProducts:[],
//     isLaoding:false,
//     error:null,
// }
// export const getProducts=createAsyncThunk('products/getProducts',async()=>{
//     try{
//         let {data}=await useGetData('/api/v1/products')
//         return data
//     }catch(error){
//         return error.response.data
//     }
// })
// export const ProductsSlice=createSlice({
//     name:'products',
//     initialState,
//     reducers:{},
//     extraReducers:{
//         [getProducts.pending]:(state)=>{
//             state.isLaoding=true
//         },
//         [getProducts.fulfilled]:(state,action)=>{
//             state.isLaoding=false
//             state.allProducts=action.payload
//         },
//         [getProducts.rejected]:(state,action)=>{
//             state.error=action.payload
//             state.isLaoding=false
//         }
//     }
// })
// export default ProductsSlice.reducer