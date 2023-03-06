import { AppThunk } from '@store'

import systemSlice from '.'

export const fetchSystem = (): AppThunk => (dispatch) => {
  dispatch(
    systemSlice.actions.systemLoaded({
      data: 'loaded',
    })
  )
}
