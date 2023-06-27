import { createSlice } from '@reduxjs/toolkit';

const memberData = {
    firstName: '',
    lastName:'',
    phone:0,
    gender:'',
    email:'',
    password:'',
    location:'',
    photo:'',
    isAdmin: false
};

const memberDataSlice = createSlice(
    {
        name:'memberData',
        initialState: memberData,
        reducers:{
            setMemberData(state, action){
                return state = action.payload;
            },
        }
    }
);

export const { setMemberData } =  memberDataSlice.actions;
export default memberDataSlice;