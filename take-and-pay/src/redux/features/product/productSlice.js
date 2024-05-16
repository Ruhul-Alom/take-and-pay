import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
    userInfo: [],
    products: [],
    checkedBrands: [],
    checkedCategorys: [],
    carts:[],
    singleProduct:null
  };
 
  export const fetchProductData = createAsyncThunk('product/fetchProductData', async () => {
    const response = await fetch('http://localhost:5000/products');
    const products = await response.json();
    console.log(products);
    return products;
  });
  

  export const fetchProductDataById = createAsyncThunk('product/fetchProductDataById', async (id) => {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    const product = await response.json();
    console.log(product);
    return product;
  });
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductDataById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDataById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchProductDataById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
  }
})
// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default productSlice.reducer