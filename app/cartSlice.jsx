// redux/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit"

const cartInitialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push({ ...action.payload, qty: 1 })
        },
        increase: (state, action) => {
            state.cart = state.cart.map(el =>
                el.id === action.payload ? { ...el, qty: el.qty + 1 } : el
            )
        },
        decrease: (state, action) => {
            const item = state.cart.find(el => el.id === action.payload)
            if (item.qty > 1) {
                state.cart = state.cart.map(el =>
                    el.id === action.payload ? { ...el, qty: el.qty - 1 } : el
                )
            } else {
                state.cart = state.cart.filter(el => el.id !== action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(el => el.id !== action.payload)
        },
    },
})

export const { addToCart, increase, decrease, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
