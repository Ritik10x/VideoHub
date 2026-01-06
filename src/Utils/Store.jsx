import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import searchSlice from './searchSclice'
import chatSlice from './chatSlice'
const store = configureStore({
reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice
},

})

export default store;