"use client";
import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import diagnosis from "./slices/diagnosis";
import diagnosisFormInput from "./slices/diagnosisFormInput";

export const store = configureStore({
	reducer: {
		diagnosisFormInput: diagnosisFormInput,
		diagnosis: diagnosis,
		auth: auth,
	},
});
