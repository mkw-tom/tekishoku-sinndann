"use client";

import type {
	ArrayFields,
	DiagnosisFormInputType,
	storeType,
} from "@/app/types/ReduxTypes";
import { clearInput, setInput } from "@/lib/redux/slices/diagnosisFormInput";
import {
	removeArrayValue,
	setArrayValue,
	setMBTI,
	setTeamRole,
} from "@/lib/redux/slices/diagnosisSendData";
import type { ChangeEvent } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const useDiangnosisForm = () => {
	const dispatch = useDispatch();
	const sendData = useSelector((state: storeType) => state.diagnosisSendData);
	const inputData = useSelector((state: storeType) => state.diagnosisFormInput);

	const handleChangeInput = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		const { value, name } = e.target;
		dispatch(
			setInput({
				name: name as keyof DiagnosisFormInputType,
				value: value,
			}),
		);
	};

	const setMBTIFunc = (mbti: string) => {
		dispatch(
			setMBTI({
				mbti: mbti,
			}),
		);
	};
	const setTeamRoleFunc = (teamRole: string) => {
		dispatch(
			setTeamRole({
				teamRole: teamRole,
			}),
		);
	};

	const checkValuesFunc = (
		field: ArrayFields,
		e: ChangeEvent<HTMLInputElement>,
	) => {
		const { value, checked } = e.target;
		if (checked) {
			return dispatch(
				setArrayValue({
					field,
					value,
				}),
			);
		}
		return dispatch(
			removeArrayValue({
				field,
				value,
			}),
		);
	};

	const valueList = (field: ArrayFields) => {
		return (
			<ul className="flex w-full flex-wrap items-center gap-3">
				{sendData[field].map((value) => (
					<li
						key={value}
						className="p y-2 flex h-auto items-center justify-center gap-2 rounded-md bg-gray-200 px-2  "
					>
						<button
							onClick={() =>
								dispatch(
									removeArrayValue({
										field: field,
										value: value,
									}),
								)
							}
							type="button"
						>
							<IoClose className="text-gray-500" />
						</button>
						<span className="text-gray-600">{value}</span>
					</li>
				))}
			</ul>
		);
	};

	const addArrayValue = (field: ArrayFields) => {
		const value = inputData[field];
		if (value === "") {
			return alert("文字を入力してください");
		}
		dispatch(
			setArrayValue({
				field: field,
				value: value,
			}),
		);
		dispatch(
			clearInput({
				name: field,
			}),
		);
	};

	return {
		handleChangeInput,
		setMBTIFunc,
		setTeamRoleFunc,
		checkValuesFunc,
		valueList,
		addArrayValue,
	};
};

export default useDiangnosisForm;
