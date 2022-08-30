import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value:false,
  },
  reducers: {
    setModal: (state) => {
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModal } = modalSlice.actions

export default modalSlice.reducer