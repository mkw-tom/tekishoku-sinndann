"use client";
import type {
	ArrayFields,
	DiagnosisSendDataType,
} from "@/app/types/ReduxTypes";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

// export interface DiagnosisType {
// 	_id: string;
// 	mbti: string;
// 	skills: string[];
// 	certifications: string[];
// 	experience: string[];
// 	interests: string[];
// 	values: string[];
// 	workStyle: string[];
// 	teamRole: string;
// 	timestamp: string;
// }

const diagnosisSendDataSlice = createSlice({
	name: "diagnosisSendData",
	initialState: {
		// _id: "",
		mbti: "INTJ",
		skills: [],
		certifications: [],
		experience: [],
		interests: [],
		values: [],
		workStyle: [],
		teamRole: "",
	},
	reducers: {
		setArrayValue: (
			state: DiagnosisSendDataType,
			action: PayloadAction<{ field: ArrayFields; value: string }>,
		) => {
			// state._id = action.payload._id;
			// state.mbti = action.payload.mbti;
			// state.skills = action.payload.skills;
			// state.certifications = action.payload.certifications;
			// state.experience = action.payload.experience;
			// state.interests = action.payload.interests;
			// state.values = action.payload.values;
			// state.workStyle = action.payload.workStyle;
			// state.teamRole = action.payload.teamRole;
			const { field, value } = action.payload;

			state[field].push(value);
		},
		removeArrayValue: (
			state: DiagnosisSendDataType,
			action: PayloadAction<{ field: ArrayFields; value: string }>,
		) => {
			const { field, value } = action.payload;

			(state[field] as string[]) = (state[field] as string[]).filter(
				(item) => item !== value,
			);
		},
		setMBTI: (
			state: DiagnosisSendDataType,
			action: PayloadAction<{ mbti: string }>,
		) => {
			state.mbti = action.payload.mbti;
		},
		setTeamRole: (
			state: DiagnosisSendDataType,
			action: PayloadAction<{ teamRole: string }>,
		) => {
			state.teamRole = action.payload.teamRole;
		},
	},
});

export const { setArrayValue, removeArrayValue, setMBTI, setTeamRole } =
	diagnosisSendDataSlice.actions;
export default diagnosisSendDataSlice.reducer;
