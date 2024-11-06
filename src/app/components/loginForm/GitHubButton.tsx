"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import { signIn } from "next-auth/react";
import type React from "react";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

const GitHubButton = () => {
	const login = useSelector((state: storeType) => state.loginToggle);
	const handleLogin = async () => {
		await signIn("github", { callbackUrl: "/mainPage" });
	};

	return (
		<button
			type="button"
			className="btn btn-xl w-full text-lg"
			onClick={handleLogin}
		>
			<FaGithub className="w-7 h-7 " />
			GitHubで{login.login ? "ログイン" : "新規登録"}
		</button>
	);
};

export default GitHubButton;
