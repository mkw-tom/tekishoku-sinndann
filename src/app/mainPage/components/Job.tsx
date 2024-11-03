"use client";

import { MdPersonSearch } from "react-icons/md";

const Job = () => {
	// const { Analysis } = useAnalysis()
	// const jobs = Analysis?.jobProposals.slice(0, 5)

	return (
		<section className="flex w-full flex-col items-start dark:text-gray-700">
			<h3 className="text-lgmd:text-xl mb-3 flex items-center font-bold">
				<MdPersonSearch />
				マッチした職業
			</h3>
			<ul className="text-lgmd:text-xl ml-12 flex w-auto list-decimal flex-col gap-2">
				<li>あいえうお</li>
				<li>あいえうお</li>
				<li>あいえうお</li>
				<li>あいえうお</li>
				<li>あいえうお</li>
				{/* {jobs?.map((job, index) => <li key={index}>{job}</li>)} */}
			</ul>
		</section>
	);
};

export default Job;
