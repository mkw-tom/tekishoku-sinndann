"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
	const handleLogin = async () => {
		await signIn("github", { callbackUrl: "/mainPage" });
	};
	return (
		<button
			type="button"
			className="btn  btn-xl w-full text-lg"
			onClick={handleLogin}
		>
			<FcGoogle className="w-7 h-7" />
			Googleで新規登録
		</button>
	);
};

export default GoogleButton;
