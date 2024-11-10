"use client";

import useDiangnosisForm from "@/app/diagnosisPage/hooks/useDiangnosisForm";
import { MBTiArray } from "@/app/diagnosisPage/selectOptions";
import type { storeType } from "@/app/types/ReduxTypes";
import { useSelector } from "react-redux";

const MBTIandSkills = () => {
	const inputDatas = useSelector(
		(state: storeType) => state.diagnosisFormInput,
	);
	const { handleChangeInput, setMBTIFunc, valueList, addArrayValue } =
		useDiangnosisForm();

	return (
		<>
			<label
				htmlFor=""
				className="flex w-full flex-col border-b-2 py-1 sm:items-start lg:flex-row lg:items-center"
			>
				<span className=" inline-block w-60 px-2 lg:block">1. MBTI</span>
				<div className="w-full md:flex">
					<select
						className="select select-info w-full max-w-xs dark:bg-gray-600"
						onChange={(e) => setMBTIFunc(e.target.value)}
					>
						<option disabled>-- MBTIタイプを選択 --</option>
						{MBTiArray.map((mbti) => (
							<option key={mbti.text} value={mbti.value}>
								{mbti.text}
							</option>
						))}
					</select>
				</div>
			</label>

			<div className="flex w-full flex-col gap-3 border-b-2 py-1 lg:flex-row ">
				<label
					htmlFor=""
					className="flex w-full flex-col sm:items-start lg:flex-row lg:items-center"
				>
					<span className=" inline-block w-72 px-2">2. スキル・特技</span>
					<div className="w-full md:flex ">
						<input
							type="text"
							name="skills"
							value={inputDatas.skills}
							placeholder="フラッシュ暗算"
							className="input input-bordered input-info  w-10/12 max-w-xs dark:bg-gray-600 sm:w-80"
							onChange={(e) => handleChangeInput(e)}
						/>
						<button
							className="btn btn-square btn-info text-white"
							type="button"
							onClick={() => addArrayValue("skills")}
						>
							追加
						</button>
					</div>
				</label>
				{valueList("skills")}
			</div>
		</>
	);
};

export default MBTIandSkills;
