"use client";
import { configureStore } from "@reduxjs/toolkit";
import auth, { type UserType } from "./slices/auth";
import diagnosis, { type DiagnosisType } from "./slices/diagnosis";
import diagnosisFormInput, {
	type DiagnosisFormInputType,
} from "./slices/diagnosisFormInput";

export type storeType = {
	diagnosisFormInput: DiagnosisFormInputType;
	diagnosis: DiagnosisType;
	auth: UserType;
};

export const store = configureStore({
	reducer: {
		diagnosisFormInput: diagnosisFormInput,
		diagnosis: diagnosis,
		auth: auth,
	},
});
