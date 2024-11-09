"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import { useRouter } from "next/navigation";
// import Link from 'next/link'
import React from "react";
import { useSelector } from "react-redux";

const ReDiagnosisButton = () => {
	const userDiagnosis = useSelector((state: storeType) => state.userDiagnosis);
	const lastDiagnosisTime = userDiagnosis.timestamp;
	const router = useRouter();

	const ReDiagnosisFunc = () => {
		const currentTime = new Date().getTime();
		const differentTime = currentTime - lastDiagnosisTime;
		const limitTime = 6 * 60 * 60 * 1000;

		const remainingTime = limitTime - differentTime;

		if (lastDiagnosisTime && differentTime < limitTime) {
			const hours = Math.floor(remainingTime / (60 * 60 * 1000));
			const minutes = Math.floor(
				(remainingTime % (60 * 60 * 1000)) / (60 * 1000),
			);

			alert(`${hours}時間${minutes}分後に再診断が可能です`);
		} else {
			router.push("/diagnosisPage");
		}
	};

	return (
		<>
			<button
				type="button"
				className={`${userDiagnosis.userId === "" ? "btn btn-disabled btn-xs sm:btn-sm md:btn-md" : "btn btn-xs sm:btn-sm md:btn-md"}`}
				onClick={ReDiagnosisFunc}
			>
				再診断
			</button>
		</>
	);
};

export default ReDiagnosisButton;
