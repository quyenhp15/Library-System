import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initalState: {
        login:{
            currentUser: null,
            isFetching: false, //loading
            error: false
        }
    },
    reducers:{
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state,action) => {
            state.login.isFetching = false; //if login sucess => no more
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFail: (state,action) => {
            state.login.isFetching = false;
            state.login.error = true;

        }
    }
})

export const {
    loginStart,
    loginFail,
    loginSuccess,
} = authSlice.action;

export default authSlice.reducer;
     
