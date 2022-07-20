import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CommonState {
	dialog: {
		isShow: boolean
	}
}

const initialState: CommonState = {
	dialog: {
		isShow: true,
	},
}

export const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		showDialog(state) {
			state.dialog.isShow = true
		},
		hideDialog(state) {
			state.dialog.isShow = false
		},
	},
})

export const { showDialog } = commonSlice.actions

export default commonSlice.reducer
