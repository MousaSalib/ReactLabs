import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    allMessages: []
}
let messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setAllMessages: (state, action) => {
            state.allMessages = action.payload
        }
    }
})

export const {setAllMessages} = messageSlice.actions;
export const selectAllMessages = (state) => state.message.allMessages; 
export default messageSlice.reducer;