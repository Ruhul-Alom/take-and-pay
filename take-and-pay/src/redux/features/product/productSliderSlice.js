import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
    sliders:[],
    loading:false,
    error:""
  };
 
  export const fetchProductSliderData = createAsyncThunk('product/etchProductSliderData ', async () => {
    const response = await fetch('http://localhost:5000/slider');
    const sliders = await response.json();
    console.log(sliders);
    return sliders;
  });
export const productSliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductSliderData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductSliderData.fulfilled, (state, action) => {
        state.loading = false;
        state.sliders = action.payload;
      })
      .addCase(fetchProductSliderData .rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})
// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default productSliderSlice.reducer