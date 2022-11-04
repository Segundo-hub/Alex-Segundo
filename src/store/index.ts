import { configureStore } from '@reduxjs/toolkit'
import songReducer from './reducers/songReducer'
import workReducer from './reducers/workReducer'

export const store = configureStore({
  reducer: {
    songs: songReducer,
    works: workReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
