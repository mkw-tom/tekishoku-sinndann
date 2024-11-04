"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import { clearSendData } from "@/lib/redux/slices/diagnosisSendData";
import { setUserDiagnosis } from "@/lib/redux/slices/userDiagnosis";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchDiagnosisAI = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const dispatch = useDispatch();
	const sendData = useSelector((state: storeType) => state.diagnosisSendData);
	const user = useSelector((state: storeType) => state.auth);
	// const [state, reducer] = useReducer(AnalysisFormDataReducer, AnalysisFormDataState)
	// const { formDataDispatch } = useAnalysis()
	// const { user } = useUser()
	// const { setAnalysis } = useAnalysis()

	const data = {
		userId: user?.id,
		...sendData,
	};

	const fetchDiagnasis = async () => {
		setLoading(true);
		const {
			mbti,
			skills,
			certifications,
			experience,
			values,
			interests,
			workStyle,
			teamRole,
		} = sendData;

		try {
			const res = await fetch("api/diagnosisAI", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userId: user?.id,
					mbti,
					skills,
					certifications,
					experience,
					values,
					interests,
					workStyle,
					teamRole,
				}),
			});

			if (!res.ok) {
				const errorData = await res.json();
				setError(true);
				throw new Error(errorData.error || "An error occurred");
			}

			setSuccess(true);
			const result = await res.json();

			// formDataDispatch({ type: 'CLEAR'})
			console.log(result);
			dispatch(
				setUserDiagnosis({
					userId: result.userId,
					commonPoints: result.commonPoints,
					jobProposals: result.jobProposals,
					skillScores: result.skillScores,
					timestamp: new Date().getTime(),
				}),
			);
		} catch (error) {
			dispatch(clearSendData());
			setError(true);
			console.log("faild fetch", error);
		} finally {
			dispatch(clearSendData());
			setLoading(false);
		}
	};

	return { loading, fetchDiagnasis, data, success, error };
};

export default useFetchDiagnosisAI;
