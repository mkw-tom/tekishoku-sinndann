"use client";
import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import diagnosisFormInput, {} from "./slices/diagnosisFormInput";
import diagnosisSendData from "./slices/diagnosisSendData";
import loginToggle from "./slices/loginToggle";
import userDiagnosis from "./slices/userDiagnosis";

export const store = configureStore({
	reducer: {
		diagnosisFormInput: diagnosisFormInput,
		diagnosisSendData: diagnosisSendData,
		auth: auth,
		userDiagnosis: userDiagnosis,
		loginToggle: loginToggle,
	},
});
