"use client";
import useDiangnosisForm from "@/app/diagnosisPage/hooks/useDiangnosisForm";
import type { storeType } from "@/app/types/ReduxTypes";
import { useSelector } from "react-redux";

const CertificationsAndExperience = () => {
	const inputDatas = useSelector(
		(state: storeType) => state.diagnosisFormInput,
	);
	const { handleChangeInput, valueList, addArrayValue } = useDiangnosisForm();

	return (
		<>
			<div className="flex w-full flex-col gap-3 border-b-2 py-1 lg:flex-row ">
				<label
					htmlFor=""
					className="flex w-full flex-col sm:items-start lg:flex-row lg:items-center"
				>
					<span className=" inline-block w-72 px-2">3. 取得資格</span>
					<div className="w-full md:flex">
						<input
							className="input input-bordered input-info w-10/12 max-w-xs dark:bg-gray-600 sm:w-80"
							type="text"
							name="certifications"
							value={inputDatas.certifications}
							placeholder="日商簿記３級、ITパスポート"
							onChange={(e) => handleChangeInput(e)}
						/>

						<button
							className="btn btn-square btn-info text-white"
							type="button"
							onClick={() => addArrayValue("certifications")}
						>
							追加
						</button>
					</div>
				</label>
				{valueList("certifications")}
			</div>

			<div className="flex w-full flex-col gap-3 border-b-2 py-1 lg:flex-row ">
				<label
					htmlFor=""
					className="flex w-full flex-col sm:items-start lg:flex-row lg:items-center"
				>
					<span className=" inline-block w-72 px-2">4. 自慢できる経験</span>
					<div className="flex w-full items-start">
						{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
						<textarea
							className="textarea textarea-info w-10/12 max-w-xs dark:bg-gray-600 sm:w-80"
							placeholder="例：ゼミの研究で優勝しました"
							name="experience"
							value={inputDatas.experience}
							onChange={(e) => handleChangeInput(e)}
							// onKeyDown={(e) => handleAddValue('experience', e)}
						></textarea>
						<button
							className="btn btn-square btn-info text-white"
							type="button"
							onClick={() => addArrayValue("experience")}
						>
							追加
						</button>
					</div>
				</label>
				{valueList("experience")}
			</div>
		</>
	);
};

export default CertificationsAndExperience;
