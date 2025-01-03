import type { userDiagnosisType } from "@/app/types/ReduxTypes";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const userDiagnosisSlice = createSlice({
	name: "userDiagnosis",
	initialState: {
		userId: "",
		mbti: "",
		jobProposals: [],
		commonPoints: [],
		skillScores: [],
		timestamp: new Date().getTime(),
	},
	reducers: {
		setUserDiagnosis: (
			state: userDiagnosisType,
			action: PayloadAction<userDiagnosisType>,
		) => {
			state.userId = action.payload.userId;
			state.mbti = action.payload.mbti;
			state.commonPoints = action.payload.commonPoints;
			state.jobProposals = action.payload.jobProposals;
			state.skillScores = action.payload.skillScores;
			state.timestamp = action.payload.timestamp;
		},
	},
});

export const { setUserDiagnosis } = userDiagnosisSlice.actions;
export default userDiagnosisSlice.reducer;
