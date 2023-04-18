import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        loggedUserId: null
    },
    reducers: {
        setUsers: (state, action) => { state.data = action.payload },
        addUser: (state, action) => { state.data.push(action.payload) },
        removeUser: (state, action) => { state.data = state.data.filter(a => a.id !== action.payload) },
        setLoggedUser: (state, action) => { state.loggedUserId = action.payload },
        updateUser: (state, action) => {
            let index = state.data.findIndex(u => u.id === action.payload.id);
            state.data[index] = action.payload;
        },
    }
})

export const setUsers = usersSlice.actions.setUsers;
export const addUser = usersSlice.actions.addUser;
export const updateUser = usersSlice.actions.updateUser;
export const removeUser = usersSlice.actions.removeUser;
export const setLoggedUser = usersSlice.actions.setLoggedUser;

export default usersSlice.reducer;