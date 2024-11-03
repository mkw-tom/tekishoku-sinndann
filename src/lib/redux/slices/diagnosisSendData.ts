"use client";
import type { DiagnosisSendDataType } from "@/app/types/ReduxTypes";
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
		_id: "",
		mbti: "",
		skills: [],
		certifications: [],
		experience: [],
		interests: [],
		values: [],
		workStyle: [],
		teamRole: "",
	},
	reducers: {
		setDiagnosisSendData: (
			state: DiagnosisSendDataType,
			action: PayloadAction<DiagnosisSendDataType>,
		) => {
			state._id = action.payload._id;
			state.mbti = action.payload.mbti;
			state.skills = action.payload.skills;
			state.certifications = action.payload.certifications;
			state.experience = action.payload.experience;
			state.interests = action.payload.interests;
			state.values = action.payload.values;
			state.workStyle = action.payload.workStyle;
			state.teamRole = action.payload.teamRole;
		},
	},
});

export const { setDiagnosisSendData } = diagnosisSendDataSlice.actions;
export default diagnosisSendDataSlice.reducer;
