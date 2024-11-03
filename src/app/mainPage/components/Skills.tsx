"use client";
import { MdPsychology } from "react-icons/md";
// import { useAnalysis } from '@/app/state/context/useAnalysisData'
// import { Psychology } from '@mui/icons-material'
import ResultChart from "./ResultChart";

const Skills = () => {
	const Analysis = [
		{ skillName: "暗記力", score: "50" },
		{ skillName: "暗記力", score: "50" },
		{ skillName: "暗記力", score: "50" },
		{ skillName: "暗記力", score: "50" },
		{ skillName: "暗記力", score: "50" },
	];
	const skillName = Analysis?.map((data) => {
		return data.skillName;
	});

	const skillScore = Analysis?.map((data) => {
		return data.score;
	});
	const data = {
		labels: skillName,
		datasets: [
			{
				label: "あなたの能力スコア",
				data: skillScore,
				backgroundColor: " rgba(34, 197, 94, 0.4)",
				borderColor: "#d1d5db",
				borderWidth: 1,
			},
		],
	};

	return (
		<section className=" w-full rounded-md bg-sky-200 py-5 md:p-5 lg:w-1/2  ">
			<h3 className="text-md mr-1 flex items-center pl-5 font-bold text-gray-700 md:p-0 md:text-xl">
				<MdPsychology style={{ fontSize: "25px" }} />
				<span>能力スコア</span>
			</h3>

			<ResultChart data={data} />
		</section>
	);
};

export default Skills;
