import { configureStore } from "@reduxjs/toolkit";
import messageReducer from './messageSlice'
import messageRed from './messageReducer'
let store = configureStore({
    reducer: {
        message: messageReducer,
        sendMessage : messageRed

    }
})
export default store;