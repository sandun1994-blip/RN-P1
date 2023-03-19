import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
    products:products,
    selectedProduct:null
}

const producstSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        setSelectedProduct:(state,action)=>{
           // console.log('state',state);
       

            const productId =action.payload;
            state.selectedProduct=state.products.find(p=>p.id===productId)

        }

    }
})
export const{setSelectedProduct} = producstSlice.actions
export default producstSlice.reducer