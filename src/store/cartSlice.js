import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    item:[],
    deliveryFee:15,
    freeDeliveryFrom:200
}


export const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCartItem:(state,action)=>{
            const newProduct =action.payload
            console.log(newProduct.id);
            const product =state.item.find((item)=>item.product.id ===newProduct.id)

            if (product) {
               state.item= state.item.map(item=>item.product.id ===newProduct.id?{...item,quantity:item.quantity+1}:item)
               
               
            } else {
                
                state.item.push({product:newProduct,quantity:1})
            }
          
           
        },
        changeQuantity:(state,action)=>{

            const {productId,amount}=action.payload
            const cartItem =state.item.find(item=>item.product.id===productId)

            if (cartItem) {
                cartItem.quantity +=amount
                
            } 
           
            if (cartItem.quantity <= 0) {
                console.log('remove');
                state.item.map(i=>{
                    
                    console.log(i);
                   return i });

                state.item =state.item.filter(i=>i != cartItem)
             
            }

        }
    }
})


export const selectNumberOfItems=state =>state.cart.item.length

export const selectSubtotal =state =>state.cart.item.reduce((sum,cartItem)=>(sum+cartItem.product.price*cartItem.quantity),0)