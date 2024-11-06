"use client";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import FormAction from "./components/fetchAction/FormAction";
import CertificationsAndExperience from "./components/formArea/src/app/analysis_page/form_page/components/formArea/CertificationsAndExperience";
import InterestsAndValues from "./components/formArea/src/app/analysis_page/form_page/components/formArea/InterestsAndValues";
import MBTIandSkills from "./components/formArea/src/app/analysis_page/form_page/components/formArea/MBTIandSkills";
import WorkStyleAndTeamRole from "./components/formArea/src/app/analysis_page/form_page/components/formArea/WorkStyleAndTeamRole";

const Page = () => {
	const router = useRouter();
	const handlePageBack = () => {
		router.back();
	};

	return (
		<div className="w-full h-full">
			<Header />
			<main className="w-hull h-auto bg-gradient-to-tr to-info from-success ">
				<div className="h-full pb-48 pt-20 px-5 md:px-10">
					{/* <div className="flex w-full items-center justify-between">
					
					</div> */}
					<div className="text-md mb-5 font-bold flex justify-between w-11/12">
						・８つの項目を入力してください。
						<button
							type="button"
							className="sm:text-md btn-link w-36  text-sm text-white hover:opacity-70 "
							onClick={handlePageBack}
						>
							ホームに戻る
						</button>
					</div>
					<form className="bg-inf  flex size-full flex-col items-start gap-16">
						<MBTIandSkills />

						<CertificationsAndExperience />

						<InterestsAndValues />

						<WorkStyleAndTeamRole />
					</form>

					<FormAction />
				</div>
			</main>
		</div>
	);
};

export default Page;
