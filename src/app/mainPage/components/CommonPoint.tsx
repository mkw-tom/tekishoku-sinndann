"use client";

import type { storeType } from "@/app/types/ReduxTypes";
import { GrTroubleshoot } from "react-icons/gr";
import { useSelector } from "react-redux";

// import { useAnalysis } from '@/app/state/context/useAnalysisData'
// import { Troubleshoot } from '@mui/icons-material'

const CommonPoint = () => {
	// const { Analysis } = useAnalysis()
	// const CommonPoint = Analysis?.commonPoints.slice(0, Analysis.commonPoints.length - 1)
	const userDiagnosis = useSelector((state: storeType) => state.userDiagnosis);
	const commonPoint = userDiagnosis.commonPoints.slice(
		0,
		userDiagnosis.commonPoints.length - 1,
	);
	console.log("common", userDiagnosis.commonPoints);
	return (
		<section className="flex w-full flex-col items-start dark:text-gray-700">
			<h3 className="text-lgmd:text-xl mb-3 flex items-center font-bold">
				<GrTroubleshoot />
				<span>これら職業の共通特徴</span>
			</h3>
			<ul className="text-lgmd:text-xl ml-12 flex w-auto list-disc flex-col gap-2">
				{commonPoint?.map((value) => (
					<li key={value}>{value}</li>
				))}
			</ul>
		</section>
	);
};

export default CommonPoint;
