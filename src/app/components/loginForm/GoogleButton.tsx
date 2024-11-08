"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";

const GoogleButton = () => {
	const login = useSelector((state: storeType) => state.loginToggle);
	const handleLogin = async () => {
		await signIn("google", { callbackUrl: "/mainPage" });
	};
	return (
		<button
			type="button"
			className="btn  btn-xl w-full text-md"
			onClick={handleLogin}
		>
			<FcGoogle className="w-7 h-7" />
			Googleで{login.login ? "ログイン" : "新規登録"}
		</button>
	);
};

export default GoogleButton;
