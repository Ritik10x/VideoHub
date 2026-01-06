import { createSlice } from "@reduxjs/toolkit";
import {LIVE_CHAT_COUNT} from './Constant'

const chatSlice= createSlice({

    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            // it will remove the first top message after the 10th //now it will not crash
                state.messages.splice(LIVE_CHAT_COUNT,1)
            
            state.messages.push(action.payload)
        }
    }
})
export const {addMessage} =chatSlice.actions
export default chatSlice.reducer;