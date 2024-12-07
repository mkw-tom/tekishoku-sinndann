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

	const data = {
		userId: user?.id,
		...sendData,
	};

	const fetchDiagnasis = async () => {
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

		if (
			!mbti ||
			!skills ||
			!certifications ||
			!experience ||
			!values ||
			!interests ||
			!workStyle ||
			!teamRole
		) {
			return alert("入力されていない項目があります");
		}

		setLoading(true);

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
			setLoading(false);

			const result = await res.json();

			dispatch(
				setUserDiagnosis({
					userId: result.userId,
					mbti: result.mbti,
					commonPoints: result.commonPoints,
					jobProposals: result.jobProposals,
					skillScores: result.skillScores,
					timestamp: result.timestamp,
				}),
			);
		} catch (error) {
			dispatch(clearSendData());
			setError(true);
			console.log("faild fetch", error);
		} finally {
			dispatch(clearSendData());
			const currentTime = new Date().getTime().toString();
			localStorage.setItem("lastDiagnosis", currentTime);
		}
	};

	return { loading, fetchDiagnasis, data, success, error };
};

export default useFetchDiagnosisAI;
