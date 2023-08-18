import { configureStore, createSlice } from '@reduxjs/toolkit'

let language = createSlice({
  name: 'language',
  initialState: { value: 'ko' },
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload
    }
  }
})

export let { setLanguage } = language.actions;

export default configureStore({
  reducer: {
    language: language.reducer
  }
})