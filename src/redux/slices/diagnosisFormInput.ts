import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InputActionPayload {
	name: keyof DiagnosisFormInputType; // フィールド名がペイロードに含まれる
	value: string; // 更新する値
}

export interface DiagnosisFormInputType {
	mbti: string;
	skills: string;
	certifications: string;
	experience: string;
	interests: string;
	values: string;
	workStyle: string;
	teamRole: string;
}

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
