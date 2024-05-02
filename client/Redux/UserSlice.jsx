import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    
}

const UserSlice=createSlice({
    name:"user",
    initialState,
reducers:{

    setUser:(state,action)=>{
        

        state.user=action.payload

    },

    LogoutUser:(state)=>{

        state.user=null

    }

}

})

export const {setUser,LogoutUser} = UserSlice.actions
export default UserSlice.reducer