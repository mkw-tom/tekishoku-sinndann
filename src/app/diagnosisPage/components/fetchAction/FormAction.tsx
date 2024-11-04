"use client";

import { CgSearchFound } from "react-icons/cg";
import useFetchDiagnosisAI from "../../hooks/useFetchDiagnosisAI";
import ErrorModal from "./ErrorModal";
import Loading from "./Loading";
import SuccessModal from "./SuccessModal";

const FormAction = () => {
	const fetchAI = async () => {
		await fetchDiagnasis();
	};
	// const { error, success, loading, handleAnalyze } = useAnalysisForm()
	const { loading, success, error, data, fetchDiagnasis } =
		useFetchDiagnosisAI();
	console.log(data);
	return (
		<div className="mt-5 flex w-full items-center">
			{loading && <Loading />}
			{success && <SuccessModal />}
			{error && <ErrorModal />}
			<button
				type="button"
				className="btn  btn-info mx-auto w-11/12 md:w-5/12 text-white  border-2 shadow-xl mt-10"
				onClick={fetchAI}
			>
				<CgSearchFound className="w-5 h-5" />
				AI診断スタート
			</button>
		</div>
	);
};

export default FormAction;
