// cartSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';

export const fetchCartData = createAsyncThunk('cart/fetchCartData', async (email) => {
  console.log(email);
  const response = await fetch(`http://localhost:5000/carts/${email}`);
  const carts = await response.json();
  return carts;
});
export const removeItemFromcart =createAsyncThunk('cart/removeItemFromcart', async (itemId) => {
  console.log(itemId);

      const response = await axios.delete(`http://localhost:5000/carts/${itemId}`);
      console.log(response.data);
      return response.data;
}
)
export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  const response = await fetch('http://localhost:5000/carts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error('Failed to send data');
  }

  const data = await response.json();
  console.log(data)
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: ` Product Added to the cart`,
    showConfirmButton: false,
    timer: 1500
  });
  return data;
}
);
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [],
    loading:false,
    error:false
  },
  reducers:{
    clearCart:(state,action)=>{
      state.carts=[]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeItemFromcart.pending, (state) => {
        state.loading = true;
    })
    .addCase(removeItemFromcart.fulfilled, (state, action) => {
        state.loading = false;
    })
    .addCase(removeItemFromcart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });
    }
})

export default cartSlice.reducer;
export const {clearCart}=cartSlice.actions
