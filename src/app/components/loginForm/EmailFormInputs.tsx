import type { storeType } from "@/app/types/ReduxTypes";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { useSelector } from "react-redux";
import type { EmailLoginValidType } from "./EmailForm";

const EmailFormInputs = () => {
	const login = useSelector((state: storeType) => state.loginToggle);

	const {
		register,
		formState: { errors },
	} = useFormContext<EmailLoginValidType>();

	return (
		<>
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
					/>
				</label>
			)}
			{errors.username?.message && (
				<span className="text-sm text-red-500">{errors.username.message}</span>
			)}

			<label
				htmlFor=""
				className="input input-bordered input-sm flex items-center gap-2"
			>
				<MdEmail className="text-gray-400" />
				<input
					{...register("email", { required: "メールアドレスが必要です" })}
					type="text"
					placeholder="email"
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
				/>
			</label>
			{errors.password?.message && (
				<span className="text-sm text-red-500">{errors.password.message}</span>
			)}
		</>
	);
};

export default EmailFormInputs;
