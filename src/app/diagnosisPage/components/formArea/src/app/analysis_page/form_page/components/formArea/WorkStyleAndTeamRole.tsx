"use client";

import useDiangnosisForm from "@/app/diagnosisPage/hooks/useDiangnosisForm";
import type { storeType } from "@/app/types/ReduxTypes";
import { useSelector } from "react-redux";

// import useAnalysisForm from '../../Hooks/useAnalysisForm'

const WorkStyleAndTeamRole = () => {
	const inputDatas = useSelector(
		(state: storeType) => state.diagnosisFormInput,
	);
	const sendDatas = useSelector((state: storeType) => state.diagnosisSendData);
	const { handleChangeInput, valueList, addArrayValue, setTeamRoleFunc } =
		useDiangnosisForm();
	console.log(sendDatas);
	return (
		<>
			<div className="flex w-full flex-col gap-3 border-b-2 py-1 lg:flex-row ">
				<label
					htmlFor=""
					className="flex w-full flex-col sm:items-start lg:flex-row lg:items-center"
				>
					<span className=" inline-block w-72 px-2 ">7. 理想の働き方</span>
					<div className="flex w-full items-start">
						{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
						<textarea
							className="textarea textarea-info  w-10/12 max-w-xs dark:bg-gray-600 sm:w-80"
							placeholder="例：プライベートを大事にしたい。"
							value={inputDatas.workStyle}
							name="workStyle"
							onChange={(e) => handleChangeInput(e)}
							// onKeyDown={(e) => handleAddValue('workStyle', e)}
							minLength={20}
						></textarea>
						<button
							className="btn btn-square btn-info text-white"
							type="button"
							onClick={() => addArrayValue("workStyle")}
						>
							追加
						</button>
					</div>
				</label>
				{valueList("workStyle")}
			</div>
			<div className="flex w-full flex-col gap-3 border-b-2 py-5 lg:flex-row">
				<label
					htmlFor=""
					className="flex w-full flex-col sm:items-start lg:flex-row lg:items-center"
				>
					<span className=" inline-block w-72 px-2 ">
						8. グループ活動での立ち位置
					</span>
					<div className="flex w-full items-start">
						{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
						<textarea
							className="textarea textarea-info h-56 w-10/12 max-w-xs dark:bg-gray-600 sm:w-80 "
							placeholder="例：リーダーシップをとることはあまりないですが、積極的にアイデアを出します。"
							name="teamRole"
							// onKeyDown={(e) => handleAddValue('workStyle', e)}
							// onKeyDown={(e) => addTeamRole(e)}
							onChange={(e) => setTeamRoleFunc(e.target.value)}
						></textarea>
						{/* <button className="btn btn-square btn-info text-white" type='button'  onClick={() => addArrayValue('interests')}>保存</button> */}
					</div>
				</label>
			</div>
		</>
	);
};

export default WorkStyleAndTeamRole;
