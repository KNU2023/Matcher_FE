import { createSlice } from '@reduxjs/toolkit';

const signInSlice = createSlice({
  name: 'signin',
  initialState: {
    formData: {
      email: '',
      password: '',
    },
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { updateFormData } = signInSlice.actions;
export default signInSlice;
