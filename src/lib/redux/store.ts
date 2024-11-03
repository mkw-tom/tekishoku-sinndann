"use client";
import type {
	DiagnosisFormInputType,
	DiagnosisSendDataType,
	UserType,
} from "@/app/types/ReduxTypes";
import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import diagnosisFormInput, {} from "./slices/diagnosisFormInput";
import diagnosisSendData from "./slices/diagnosisSendData";
import userDiagnosis from "./slices/userDiagnosis";

export type storeType = {
	diagnosisFormInput: DiagnosisFormInputType;
	diagnosis: DiagnosisSendDataType;
	auth: UserType;
};

export const store = configureStore({
	reducer: {
		diagnosisFormInput: diagnosisFormInput,
		diagnosisSendData: diagnosisSendData,
		auth: auth,
		userDiagnosis: userDiagnosis,
	},
});
