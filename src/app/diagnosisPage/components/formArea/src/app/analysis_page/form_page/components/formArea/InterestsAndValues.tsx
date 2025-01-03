"use client";
import useDiangnosisForm from "@/app/diagnosisPage/hooks/useDiangnosisForm";
import { valesArray } from "@/app/diagnosisPage/selectOptions";
import type { storeType } from "@/app/types/ReduxTypes";
import { useSelector } from "react-redux";

const InterestsAndValues = () => {
	const inputDatas = useSelector(
		(state: storeType) => state.diagnosisFormInput,
	);
	const sendDatas = useSelector((state: storeType) => state.diagnosisSendData);
	const { handleChangeInput, valueList, addArrayValue, checkValuesFunc } =
		useDiangnosisForm();

	return (
		<>
			<div className="flex w-full flex-col gap-3 border-b-2 py-1 lg:flex-row ">
				<label
					htmlFor=""
					className="flex w-full flex-col sm:items-start lg:flex-row lg:items-center"
				>
					<span className=" inline-block w-72 px-2">5. 興味のある分野</span>
					<div className="flex w-full items-center">
						<input
							type="text"
							placeholder="業界や業種、学問、芸術など"
							className="input input-bordered input-info w-80 max-w-xs dark:bg-gray-600"
							name="interests"
							value={inputDatas.interests}
							onChange={(e) => handleChangeInput(e)}
						/>
						<button
							className="btn btn-square btn-info text-white  border-2"
							type="button"
							onClick={() => addArrayValue("interests")}
						>
							追加
						</button>
					</div>
				</label>
				{valueList("interests")}
			</div>

			<div className="flex w-full flex-col gap-3 border-b-2 py-1 lg:flex-row ">
				<label
					htmlFor="my_modal_6"
					className="flex w-full flex-col sm:items-start lg:flex-row lg:items-center"
				>
					<span className=" inline-block w-52 px-2">
						6. 大事にしている価値観
					</span>
					<label htmlFor="my_modal_6" className="btn btn-info w-80 text-white">
						項目をチェック
					</label>
					<input type="checkbox" id="my_modal_6" className="modal-toggle" />
					{/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
					<div className="modal" role="dialog">
						<div className="modal-box dark:bg-gray-700  ">
							{valesArray?.map((value) => (
								<label
									key={value.text}
									htmlFor=""
									className="label cursor-pointer"
								>
									<span className="label-text dark:text-white">
										{value.text}
									</span>
									<input
										type="checkbox"
										value={value.value}
										checked={
											// biome-ignore lint/complexity/noUselessTernary: <explanation>
											sendDatas.values.find((e) => e === value.value)
												? true
												: false
										}
										className="checkbox-info checkbox mr-1"
										onChange={(e) => checkValuesFunc("values", e)}
									/>
								</label>
							))}
						</div>
					</div>
				</label>
				{valueList("values")}
			</div>
		</>
	);
};

export default InterestsAndValues;
