import type {
	DiagnosisFormInputType,
	InputActionPayload,
} from "@/app/types/ReduxTypes";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export const diagnosisFormInputSlice = createSlice({
	name: "diagnosisFormInput",
	initialState: {
		mbti: "",
		skills: "",
		certifications: "",
		experience: "",
		interests: "",
		values: "",
		workStyle: "",
		teamRole: "",
	},
	reducers: {
		setInput: (
			state: DiagnosisFormInputType,
			action: PayloadAction<InputActionPayload>,
		) => {
			const { name, value } = action.payload;
			state[name] = value;
		},
		formClear: (
			state,
			action: PayloadAction<{ name: keyof DiagnosisFormInputType }>,
		) => {
			const { name } = action.payload;
			state[name] = "";
		},
	},
});

export const { setInput, formClear } = diagnosisFormInputSlice.actions;
export default diagnosisFormInputSlice.reducer;
