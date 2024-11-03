"use client";
import type { UserType } from "@/app/types/ReduxTypes";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

// export interface UserType {
// 	// authId: string
// 	customId: string;
// 	username: string;
// 	password: string;
// 	profilePicture: string;
// 	email: string;
// }
export const authSlice = createSlice({
	name: "auth",
	initialState: {
		customId: "",
		username: "",
		password: "",
		profilePicture: "",
		email: "",
	},
	reducers: {
		setUser: (state: UserType, action: PayloadAction<UserType>) => {
			state.customId = action.payload.customId;
			state.username = action.payload.username;
			state.password = action.payload.password;
			state.profilePicture = action.payload.profilePicture;
			state.email = action.payload.email;
		},
		clearUser: (state: UserType) => {
			state.customId = "";
			state.username = "";
			state.password = "";
			state.profilePicture = "";
			state.email = "";
		},
	},
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
