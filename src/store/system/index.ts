import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '@store'
import { HYDRATE } from 'next-redux-wrapper'

interface SystemState {
  data?: string
}

const initialSystemState: SystemState = {
  data: undefined,
}

const systemSlice = createSlice({
  name: 'system',
  initialState: initialSystemState,
  reducers: {
    systemLoaded(state, { payload }: PayloadAction<SystemState>) {
      state.data = payload.data
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.system,
      }
    },
  },
})

export default systemSlice

export const systemSliceSelector = (state: AppState): SystemState =>
  state.system
export const selectSystemData = createSelector(
  systemSliceSelector,
  (system) => system.data
)
