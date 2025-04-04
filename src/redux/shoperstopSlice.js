import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null
}

export const shoperstopSlice = createSlice({
    name:"shoperstop",
    initialState,
    reducers: {
        addToCart:(state,action)=>{
            const item = state.productData.find((item)=>item._id===action.payload._id);
            if (item){
                item.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload);
            };
        },
        deleteItem: (state,action)=>{
            state.productData = state.productData.filter(
                (item)=> item._id !== action.payload
            );
        },
        resetCard: (state)=>{
            state.productData = [];
        },

        incrementQuantity: (state,action)=>{
            const item = state.productData.find(
                (item)=>item._id===action.payload._id);
            if (item){
                item.quantity++;
            };
        },
        decrementQuantity: (state,action)=>{
            const item = state.productData.find(
                (item)=>item._id===action.payload._id
            );
            if (item.quantity === 1){
                item.quantity = 1;
            } else{
                item.quantity--;
            }
        },
        addUser: (state,action)=>{
            state.userInfo = action.payload
        },
        removeUser: (state)=>{
            state.userInfo= null;
        },
    },
});

export const {addToCart,deleteItem,resetCard,incrementQuantity,decrementQuantity, addUser, removeUser} = shoperstopSlice.actions;
export default shoperstopSlice.reducer;