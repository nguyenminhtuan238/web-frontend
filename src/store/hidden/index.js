import { createSlice } from "@reduxjs/toolkit";

const clice=createSlice({
    name:"hidden",
    initialState:{
        isSearch:false,
        modal:false,
        changscroll:false,
    },
    reducers:{
        setmodal:state=>{
            state.modal=!state.modal
        },
        setIsSearch:state=>{
            state.isSearch=!state.isSearch
        },
        setScroll:(state,action)=>{
            state.changscroll=action.payload
        },
    }
})
export const {setIsSearch,setmodal,setScroll}=clice.actions
export default clice.reducer