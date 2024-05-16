import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  blogs: [],
};


export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  
    const response = await fetch('http://localhost:5000/blogs');
    const data = await response.json();
    return data;
 
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
    }
})


export default blogSlice.reducer;