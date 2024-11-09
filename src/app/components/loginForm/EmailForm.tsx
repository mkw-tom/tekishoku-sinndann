"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import { EmailLoginValidationSchema } from "@/lib/zod/validate";
import { zodResolver } from "@hookform/resolvers/zod";
// import EmailFormInputs from "./EmailFormInputs";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { useSelector } from "react-redux";

export interface EmailLoginValidType {
	username: string;
	email: string;
	password: string;
}

const EmailIForm = () => {
	const login = useSelector((state: storeType) => state.loginToggle);
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const {
		trigger,
		register,
		formState: { errors },
	} = useForm<EmailLoginValidType>({
		resolver: zodResolver(EmailLoginValidationSchema),
	});

	const EmailLoginValidationFunc = async () => {
		const usernameValid = await trigger("username");
		const emailValid = await trigger("email");
		const passwordValid = await trigger("password");
		const validOption = login.login
			? emailValid && passwordValid
			: usernameValid && emailValid && passwordValid;
		// const {username, email, password} = data

		if (validOption) {
			emailLogin();
		} else {
			console.log("valid error");
		}
	};

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

		if (result?.error) {
			alert("既にユーザーが存在します");
			console.log("エラーが発生しました:", result.error);
		}
	};

	return (
		// <FormProvider {...methods}>
		<div
			className="w-9/12 lg:w-7/12 mx-auto flex flex-col gap-3"
			// onSubmit={handleSubmit(onSubmit)}
		>
			{/* <EmailFormInputs />  */}
			{!login.login && (
				<label
					htmlFor=""
					className="input input-bordered input-sm flex items-center gap-2"
				>
					<FaUser className="text-gray-400" />
					<input
						{...register("username", { required: "ユーザー名が必要です" })}
						type="text"
						placeholder="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
			)}
			{login.login ||
				(errors.username?.message && (
					<span className="text-sm text-red-500">
						{errors.username.message}
					</span>
				))}

			<label
				htmlFor=""
				className="input input-bordered input-sm flex items-center gap-2"
			>
				<MdEmail className="text-gray-400" />
				<input
					{...register("email", { required: "メールアドレスが必要です" })}
					type="text"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			{errors.email?.message && (
				<span className="text-sm text-red-500">{errors.email.message}</span>
			)}

			<label
				htmlFor=""
				className="input input-bordered input-sm flex items-center gap-2"
			>
				<MdLock className="text-gray-400" />
				<input
					{...register("password", { required: "パスワードが必要です" })}
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			{errors.password?.message && (
				<span className="text-sm text-red-500">{errors.password.message}</span>
			)}
			<button
				type="button"
				className="btn btn-xl w-full text-md"
				onClick={EmailLoginValidationFunc}
			>
				<MdEmail className="w-7 h-7 " />
				Emailで{login.login ? "ログイン" : "新規登録"}
			</button>
		</div>
		// </FormProvider>
	);
};

export default EmailIForm;
