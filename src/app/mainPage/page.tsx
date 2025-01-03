// import Link from "next/link";
import React from "react";
import { CgSearchFound } from "react-icons/cg";
import Header from "../components/Header";
import ReDiagnosisButton from "./components/ReDiagnosisButton";
import ShareButton from "./components/ShareButton";
import ShowResult from "./components/ShowResult";
import WarnWrite from "./components/WarnWrite";

const Page = () => {
	return (
		<div className="w-full h-full">
			<Header />
			<main className="min-h-lvh bg-opacity-60 bg-gradient-to-tr to-info from-success">
				<div className="mx-5 h-full pb-20 pt-20 md:mx-10 ">
					<div className="mx-auto mt-10 w-full xl:w-11/12">
						<h2 className="flex items-center justify-between border-b-2 border-b-gray-800 font-bold tracking-wider">
							<span className="text-xl md:text-2xl text-gray-800 flex items-center">
								<CgSearchFound className="w-7 h-7 mr-2" />
								AIの診断結果
							</span>
							<div className="flex gap-2 pb-1">
								<ReDiagnosisButton />
								<ShareButton />
							</div>
						</h2>
						<ShowResult />
						<WarnWrite />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Page;
