"use client";
import { signIn } from "next-auth/react";
import type React from "react";
import { FaGithub } from "react-icons/fa";

const GitHubButton = () => {
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
			GitHubで新規登録
		</button>
	);
};

export default GitHubButton;
