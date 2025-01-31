import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: false,
    userData: [],
    usersInfo: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload;
        },

        userLogout: (state) => {
            state.user = false;
            state.userData = [];
        },

        userData: (state, action) => {
            state.userData = action.payload;
        },

        userInfo: (state, action) => {
            state.usersInfo = action.payload;
        },
    }
})

export const { userLogin, userLogout, userInfo, userData } = userSlice.actions;
export default userSlice.reducer