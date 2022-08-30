import { configureStore } from '@reduxjs/toolkit'
import CounterSlices from './slices/CounterSlices'
import modalSlice from './slices/modalSlice'
import listModalSlice from './slices/listModalSlice'

export default configureStore({
  reducer: {
    counter: CounterSlices,
    modal:modalSlice,
    listModal:listModalSlice
  },
})