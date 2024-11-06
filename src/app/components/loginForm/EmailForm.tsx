"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { useSelector } from "react-redux";
import EmailButton from "./EmailButton";

const EmailIForm = () => {
	const login = useSelector((state: storeType) => state.loginToggle);
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	console.log(username, email, password);

	return (
		<div className="w-7/12 mx-auto flex flex-col gap-3">
			<label
				htmlFor=""
				className={`${login.login ? "hidden" : "block"} input input-bordered input-sm flex items-center gap-2`}
			>
				<FaUser className="text-gray-400" />
				<input
					type="text"
					className=""
					placeholder="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</label>
			<label
				htmlFor=""
				className="input input-bordered input-sm flex items-center gap-2"
			>
				<MdEmail className="text-gray-400" />
				<input
					type="text"
					className=""
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<label
				htmlFor=""
				className="input input-bordered input-sm flex items-center gap-2"
			>
				<MdLock className="text-gray-400" />
				<input
					type="text"
					className=""
					placeholder="passoword"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			<EmailButton username={username} email={email} password={password} />
		</div>
	);
};

export default EmailIForm;
