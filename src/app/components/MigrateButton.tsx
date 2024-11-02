"use client";
// import { useAnalysis } from '@/app/state/context/useAnalysisData'
import Link from "next/link";

const MigrateButton = () => {
	// const { Analysis } = useAnalysis()
	const Analysis = false;

	return (
		<>
			{Analysis ? (
				<Link
					href="/analysis_page/result_page"
					className="btn btn-md mx-auto mb-48 mt-10 flex w-5/12 min-w-56 max-w-72 items-center bg-info text-white shadow-lg md:btn-lg"
				>
					結果を見る
				</Link>
			) : (
				<Link
					href="/analysis_page/form_page"
					className="btn btn-md mx-auto mb-48 mt-10 flex w-5/12 min-w-56 max-w-72 animate-pulse items-center bg-gradient-to-r from-info to-success opacity-75 shadow-lg md:btn-lg"
				>
					{/* <img src='/file.png' className='size-12 md:w-16 md:h-16'></img> */}
					<span className="text-md font-bold text-base-100 md:text-lg">
						さっそく診断する
					</span>
				</Link>
			)}
		</>
	);
};

export default MigrateButton;
