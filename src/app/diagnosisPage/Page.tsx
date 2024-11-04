"use client";
import { useRouter } from "next/navigation";
import CertificationsAndExperience from "./components/formArea/src/app/analysis_page/form_page/components/formArea/CertificationsAndExperience";
import InterestsAndValues from "./components/formArea/src/app/analysis_page/form_page/components/formArea/InterestsAndValues";
import MBTIandSkills from "./components/formArea/src/app/analysis_page/form_page/components/formArea/MBTIandSkills";
import WorkStyleAndTeamRole from "./components/formArea/src/app/analysis_page/form_page/components/formArea/WorkStyleAndTeamRole";
// import FormAction from "./components/fetchActions/FormAction";
// import CertificationsAndExperience from "./components/formArea/CertificationsAndExperience";
// import InterestsAndValues from "./components/formArea/InterestsAndValues";
// import MBTIandSkills from "./components/formArea/MBTIandSkills";
// import WorkStyleAndTeamRole from "./components/formArea/WorkStyleAndTeamRole";
// import useAnalysisForm from "./Hooks/useAnalysisForm";

const Page = () => {
	const router = useRouter();
	const handlePageBack = () => {
		router.back();
	};

	return (
		<main className="w-full h-auto bg-gradient-to-tr to-info from-success ">
			<div className="mx-5 h-full pb-48 pt-20 md:mx-10 w-full">
				{/* <div className="flex w-full items-center justify-between">
				
				</div> */}
				<div className="text-md mb-5 font-bold flex justify-between w-11/12">
					・８つの項目を入力してください。
					<button
						type="button"
						className="sm:text-md btn-link w-36  text-sm text-gray-700 hover:opacity-70 dark:text-base-300"
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

				{/* <FormAction /> */}
			</div>
		</main>
	);
};

export default Page;
