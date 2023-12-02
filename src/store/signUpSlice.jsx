import { createSlice } from '@reduxjs/toolkit';

const signUpSlice = createSlice({
  name: 'signup',
  initialState: {
    isChecked: false,
    formData: {
      email: '',
      password: '',
      name: '',
      major: '',
      stdNumber: '',
    },
  },
  reducers: {
    toggleCheck: (state) => {
      state.isChecked = !state.isChecked;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { toggleCheck, updateFormData } = signUpSlice.actions;
export default signUpSlice;
