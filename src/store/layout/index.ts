import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '@store'
import { HYDRATE } from 'next-redux-wrapper'

interface LayoutState {
  hasFooter: boolean
}

const initialLayoutState: LayoutState = {
  hasFooter: false,
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState: initialLayoutState,
  reducers: {
    toggleFooter: (state, { payload }: PayloadAction<LayoutState>) => {
      state.hasFooter = payload.hasFooter
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createAction(HYDRATE), (state, action: any) => {
      return {
        ...state,
        ...action.payload.layout,
      }
    })
  },
})

export default layoutSlice
export const layoutSliceSelector = (state: AppState): LayoutState =>
  state.layout
