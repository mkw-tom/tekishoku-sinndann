import type { userDiagnosisType } from "@/app/types/ReduxTypes";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const userDiagnosisSlice = createSlice({
	name: "userDiagnosis",
	initialState: {
		userId: "",
		jobProposals: [],
		commonPoints: [],
		skillScores: [],
	},
	reducers: {
		setUserDiagnosis: (
			state: userDiagnosisType,
			action: PayloadAction<userDiagnosisType>,
		) => {
			state.userId = action.payload.userId;
			state.commonPoints = action.payload.commonPoints;
			state.jobProposals = action.payload.jobProposals;
			state.skillScores = action.payload.skillScores;
		},
	},
});

export const { setUserDiagnosis } = userDiagnosisSlice.actions;
export default userDiagnosisSlice.reducer;
