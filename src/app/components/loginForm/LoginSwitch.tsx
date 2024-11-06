"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import { loginToggle } from "@/lib/redux/slices/loginToggle";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginSwitch = () => {
	const login = useSelector((state: storeType) => state.loginToggle);
	const dispatch = useDispatch();

	const loginToggleFunc = () => {
		dispatch(loginToggle());
		console.log(login);
	};

	return (
		<div className="text-xl text-center mt-20  font-bold ">
			<button
				type="button"
				className={`${!login.login ? "border-b-4 border-info text-info" : ""} px-3 hover:text-info `}
				onClick={loginToggleFunc}
			>
				新規登録
			</button>
			<button
				type="button"
				className={`${login.login ? "border-b-4 border-info text-info" : ""} px-3 hover:text-info`}
				onClick={loginToggleFunc}
			>
				ログイン
			</button>
		</div>
	);
};

export default LoginSwitch;
