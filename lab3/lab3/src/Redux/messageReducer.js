
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messageContent: '',
};

const messageReducer = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessageContent: (state, action) => {
      state.messageContent = action.payload;
    },
    resetMessageContent: (state) => {
      state.messageContent = '';
    },
  },
});

export const { setMessageContent, resetMessageContent } = messageReducer.actions;
export const selectMessageContent = (state) => state.message.messageContent;
export default messageReducer.reducer;
