"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import { signIn } from "next-auth/react";
import React from "react";
import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";

const EmailButton = ({
	username,
	email,
	password,
}: {
	username: string;
	email: string;
	password: string;
}) => {
	const login = useSelector((state: storeType) => state.loginToggle);
	console.log(login.login);

	const emailLogin = async () => {
		const options = login.login
			? {
					callbackUrl: "/mainPage",
					// username: username,
					email: email,
					password: password,
				}
			: {
					callbackUrl: "/mainPage",
					username: username,
					email: email,
					password: password,
				};

		const result = await signIn("credentials", options);
		if (result?.error) {
			alert("既にユーザーが存在します");
			console.log("era-");
		}
	};

	return (
		<button
			type="button"
			className="btn btn-xl w-full text-md"
			onClick={emailLogin}
		>
			<MdEmail className="w-7 h-7 " />
			Emailで{login.login ? "ログイン" : "新規登録"}
		</button>
	);
};

export default EmailButton;
