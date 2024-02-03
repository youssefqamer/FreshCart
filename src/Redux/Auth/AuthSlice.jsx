// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import usePostData from './../../Hooks/usePostData';

// const initialState={
// createUser:[],
// userSignIn:[],
// userToken:'',
// isLoading:false,
// error:null,
// }
// export const createNewUser=createAsyncThunk('user/createNewUser',async(values)=>{
//     try{
//         let {data}=await usePostData(`/api/v1/auth/signup`,values)
//         return data
//     }catch(error){
//         return error.response.data
//     }
// })
// export const userLogIn=createAsyncThunk('user/userLogin',async(values)=>{
//     try{
//         let {data}=await usePostData(`/api/v1/auth/signin`,values)
//         return data
//     }catch(error){
//         return error.response.data
//     }
// })
// export const AuthSlice=createSlice({
//     name:'user',
//     initialState,
//     reducers:{},
//     extraReducers:{
//         [createNewUser.pending]:(state)=>{
//             state.isLoading=true
//         },
//         [createNewUser.fulfilled]:(state,action)=>{
//             state.createUser=action.payload
//             state.isLoading=false
//         },
//         [createNewUser.rejected]:(state,action)=>{
//             state.error=action.payload
//             state.isLoading=false
//         },

//         [userLogIn.pending]:(state)=>{
//             state.isLoading=true
//         },
//         [userLogIn.fulfilled]:(state,action)=>{
//             state.userSignIn=action.payload
//             state.userToken=action.payload.token
//             state.isLoading=false
//         },
//         [userLogIn.rejected]:(state,action)=>{
//             state.error=action.payload
//             state.isLoading=false
//         },
//     }
// })
// export default AuthSlice.reducer