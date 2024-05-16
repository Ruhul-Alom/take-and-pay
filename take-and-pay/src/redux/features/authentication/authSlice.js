import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import auth from '../../../firebase/firebase.config';
import { useEffect } from 'react';

export const signInWithEmailPassword = createAsyncThunk(
  'auth/signInWithEmailPassword',
  async ({ email, password }) => {
    const response = await signInWithEmailAndPassword(auth,email, password);
    return response.user;
  }
);
export const signUpWithEmailPassword = createAsyncThunk(
  'auth/signUpWithEmailPassword',
  async ({ email, password }) => {
    const response = await createUserWithEmailAndPassword(auth,email, password);
    return response.user;
  }
);

export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth,provider);
    return response.user;
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading:false,
    error:false

  },
  reducers: {
    handleLogOut:(state,action)=>{
      signOut(auth)
    state.user=null
    },
    signInuser:(state,action)=>{
    state.user=action.payload
    },
  },
    extraReducers: (builder) => {
        builder
          .addCase(signInWithEmailPassword .pending, (state) => {
            state.loading = true;
          })
          .addCase(signInWithEmailPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
          })
          .addCase(signInWithEmailPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(signInWithGoogle.pending, (state) => {
            state.loading = true;
          })
          .addCase(signInWithGoogle.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
          })
          .addCase(signInWithGoogle.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(signUpWithEmailPassword.pending, (state) => {
            state.loading = true;
          })
          .addCase(signUpWithEmailPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
          })
          .addCase(signUpWithEmailPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
  }
});

export default authSlice.reducer;
export const {handleLogOut,signInuser}=authSlice.actions
