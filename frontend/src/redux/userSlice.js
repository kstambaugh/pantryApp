import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: [
        { id: 1, first_name: 'kyle', last_name: 'stambaugh', email: 'kyle.stambaugh@mail.com', password: 1234 },
        { id: 2, first_name: 'sam', last_name: 'davis', email: 'sam.davis@mail.com', password: 1234 },
        { id: 3, first_name: 'duck', last_name: 'dodgers', email: 'duck.dodgers@mail.com', password: 1234 },
        { id: 4, first_name: 'clint', last_name: 'eastwood', email: 'clint.eastwood@mail.com', password: 1234 },
    ],
    reducers: {
        addUser: (state, action) => {
            const newUser = {
                id: Date.now(),
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email,
                password: action.payload.password,
            };
            state.push(newUser)
        },
    },
});

export const {
    addUser,
} = userSlice.actions

export default userSlice.reducer;