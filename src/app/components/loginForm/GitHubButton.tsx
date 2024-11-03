"use client";
// import { clearUser, setUser } from "@/lib/redux/slices/auth";
// import type { storeType } from "@/lib/redux/store";
import { signIn, useSession } from "next-auth/react";
import type React from "react";
// import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";

const GitHubButton = () => {
	// const dispatch = useDispatch();
	// const user = useSelector((state: storeType) => state.auth);

	const { data: session } = useSession();
	console.log(session?.user);
	// console.log(user);

	const handleLogin = async () => {
		await signIn("github", { callbackUrl: "/mainPage" });

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

	// useEffect(() => {
	// 	if (session?.user) {
	// 		dispatch(
	// 			setUser({
	// 				customId: "123",
	// 				username: session?.user.name as string,
	// 				password: "gange",
	// 				profilePicture: session?.user.image as string,
	// 				email: session?.user.email as string,
	// 			}),
	// 		);
	// 	} else {
	// 		dispatch(clearUser());
	// 		console.log(user)
	// 	}
	// }, [session, dispatch, user]);

	return (
		<button
			type="button"
			className="btn btn-xl w-full text-lg"
			onClick={handleLogin}
		>
			<FaGithub className="w-7 h-7 " />
			{session?.user ? "ログアウト" : "GitHubで新規登録"}
			{/* GitHubで新規登録 */}
		</button>
	);
};

export default GitHubButton;
