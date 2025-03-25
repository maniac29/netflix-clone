import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name:"loader",
    initialState:{
        showLoader:false
    },
    reducers:{
        loadLoader : (state,action) => {
            state.showLoader = action.payload
        }
    }
})

export const {loadLoader} = loaderSlice.actions;
export default loaderSlice.reducer