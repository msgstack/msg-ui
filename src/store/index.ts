import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import systemSlice from './system'
import { createWrapper } from 'next-redux-wrapper'
import layoutSlice from './layout'

const makeStore = () => {
  return configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
      [systemSlice.name]: systemSlice.reducer,
      [layoutSlice.name]: layoutSlice.reducer,
    },
  })
}

type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore)
