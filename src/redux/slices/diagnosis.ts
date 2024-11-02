"use client";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface DiagnosisType {
	_id: string;
	mbti: string;
	skills: string[];
	certifications: string[];
	experience: string[];
	interests: string[];
	values: string[];
	workStyle: string[];
	teamRole: string;
	timestamp: Date;
}

const diagnosisSlice = createSlice({
	name: "diagnosis",
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
		timestamp: new Date(),
	},
	reducers: {
		setDiagnosisData: (
			state: DiagnosisType,
			action: PayloadAction<DiagnosisType>,
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
			state.timestamp = action.payload.timestamp;
		},
	},
});

export const { setDiagnosisData } = diagnosisSlice.actions;
export default diagnosisSlice.reducer;
