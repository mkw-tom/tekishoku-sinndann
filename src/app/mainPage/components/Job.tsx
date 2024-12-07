"use client";

import type { storeType } from "@/app/types/ReduxTypes";
import { MdPersonSearch } from "react-icons/md";
import { useSelector } from "react-redux";

const Job = () => {
	const userDiagnosis = useSelector((state: storeType) => state.userDiagnosis);
	const jobs = userDiagnosis.jobProposals.slice(0, 5);

	return (
		<section className="flex w-full flex-col items-start dark:text-gray-700">
			<h3 className="text-md md:text-lg mb-3 flex items-center font-bold">
				<MdPersonSearch />
				マッチした職業
			</h3>
			<ul className="text-lgmd:text-xl ml-12 flex w-auto list-decimal flex-col gap-2">
				{jobs?.map((job) => (
					<li key={job}>{job}</li>
				))}
			</ul>
		</section>
	);
};

export default Job;
