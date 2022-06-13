import {createSlice} from '@reduxjs/toolkit';

const OrderNowReducer = createSlice({
    name: 'order', 
    initialState:{flavors:['Strawberry', 'Grapefruit', 'Cookies and Cream'], savedOrder:[]},
    reducers:{
            saveOrder:(state, action)=>{
                state.savedOrder.push(action.payload);
               
            },
            removeOrder:(state, action)=>{
                const indexNumber = state.savedOrder.findIndex(item => item === action.payload);
                state.savedOrder.splice(indexNumber, 1);
            }
    }
});

export default OrderNowReducer.reducer;
export const {saveOrder,removeOrder} = OrderNowReducer.actions;