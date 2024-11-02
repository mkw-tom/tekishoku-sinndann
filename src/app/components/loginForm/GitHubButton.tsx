"use client";
import { type UserType, clearUser, setUser } from "@/redux/slices/auth";
import type { storeType } from "@/redux/store";
import { signIn, signOut, useSession } from "next-auth/react";
import type React from "react";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const GitHubButton = () => {
	const dispatch = useDispatch();
	const user = useSelector((state: storeType) => state.auth);

	const { data: session } = useSession();
	console.log(session?.user);
	console.log(user);

	const handleLogin = async () => {
		await signIn("github");

		// dispatch(
		//   setUser({
		//     customId: "123",
		//     username: session?.user.name as string,
		//     password: "gange",
		//     profilePicture: session?.user.image as string,
		//     email: session?.user.email as string,
		//   })
		// );
	};

	useEffect(() => {
		if (session?.user) {
			dispatch(
				setUser({
					customId: "123",
					username: session?.user.name as string,
					password: "gange",
					profilePicture: session?.user.image as string,
					email: session?.user.email as string,
				}),
			);
		} else {
			dispatch(clearUser());
		}
	}, [session, dispatch]);

	const handleLogout = async () => {
		await signOut();

		dispatch(clearUser());
	};

	return (
		<button
			type="button"
			className="btn btn-xl w-full text-lg"
			onClick={session?.user ? handleLogout : handleLogin}
		>
			<FaGithub className="w-7 h-7 " />
			{session?.user ? "ログアウト" : "GitHubで新規登録"}
			{/* GitHubで新規登録 */}
		</button>
	);
};

export default GitHubButton;
