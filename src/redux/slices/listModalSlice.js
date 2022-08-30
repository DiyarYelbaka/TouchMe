import { createSlice } from '@reduxjs/toolkit'

export const listModalSlice= createSlice({
  name: 'listModal',
  initialState: {
    value:false,
  },
  reducers: {
    setListModal: (state) => {
      state.value = !state.value
    },
    setOpenModal: (state) => {
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { setListModal,setOpenModal } = listModalSlice.actions

export default listModalSlice.reducer