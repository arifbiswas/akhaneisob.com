import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggleDrawer: false,
  togglePanel: false,
}

export const drawerToggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleDrawerReducer: (state) => {
      state.toggleDrawer =!state.toggleDrawer
    },
    toggleAdminPanelReducer: (state) => {  state.togglePanel = !state.togglePanel }
  },
})

// Action creators are generated for each case reducer function
export const { toggleDrawerReducer , toggleAdminPanelReducer } = drawerToggleSlice.actions

export default drawerToggleSlice.reducer