import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import loaderReducer from "./loaderSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies : moviesReducer,
        gpt : gptReducer,
        loader: loaderReducer
    }
});

export default appStore