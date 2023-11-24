import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sessionID: ''
} 

const sessionID = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSessionID: (state, action) => {
            state.sessionID = action.payload
        }
    }
});

export const { setSessionID } = sessionID.actions;
export default sessionID.reducer;