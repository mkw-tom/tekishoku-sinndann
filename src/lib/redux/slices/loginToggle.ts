import { createSlice } from "@reduxjs/toolkit";

const loginToggleSlice = createSlice({
	name: "loginToggle",
	initialState: {
		login: false,
	},
	reducers: {
		loginToggle: (state: { login: boolean }) => {
			state.login = !state.login;
		},
	},
});

export const { loginToggle } = loginToggleSlice.actions;
export default loginToggleSlice.reducer;
