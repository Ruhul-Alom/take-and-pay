import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

const initialState = {
  contact: [],
};


export const sendUserQuery = createAsyncThunk('contact/sendUserQuery', async (query) => {
  
    const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });
      if (!response.ok) {
        throw new Error('Failed to send data');
      }
      const data = await response.json();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Query has been send to Admin",
        showConfirmButton: false,
        timer: 1500
      });;
      return data;
  
    }
    );

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendUserQuery.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendUserQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
      })
      .addCase(sendUserQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
    }
})


export default contactSlice.reducer;