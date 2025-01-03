"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import { MdPsychology } from "react-icons/md";
import { useSelector } from "react-redux";
import ResultChart from "./ResultChart";

const Skills = () => {
	const userDiagnosis = useSelector((state: storeType) => state.userDiagnosis);
	const skillScores = userDiagnosis.skillScores;

	const skillName = skillScores?.map((data) => {
		return data.skillName;
	});

	const skillScore = skillScores?.map((data) => {
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
		<section className=" w-full rounded-md bg-sky-200 bg-opacity-60 py-5 md:p-5 lg:w-1/2  ">
			<h3 className="text-md mr-1 flex items-center pl-5 font-bold text-gray-700 md:p-0 md:text-xl">
				<MdPsychology style={{ fontSize: "25px" }} />
				<span>能力スコア</span>
			</h3>

			<ResultChart data={data} />
		</section>
	);
};

export default Skills;
