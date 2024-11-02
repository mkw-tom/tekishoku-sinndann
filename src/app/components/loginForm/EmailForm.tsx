"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import EmailButton from "./EmailButton";

const EmailIForm = () => {
	return (
		<div className="w-7/12 mx-auto flex flex-col gap-3">
			<label
				htmlFor=""
				className="input input-bordered input-sm flex items-center gap-2"
			>
				<FaUser className="text-gray-400" />
				<input type="text" className="" placeholder="username" />
			</label>
			<label
				htmlFor=""
				className="input input-bordered input-sm flex items-center gap-2"
			>
				<MdEmail className="text-gray-400" />
				<input type="text" className="" placeholder="email" />
			</label>
			<label
				htmlFor=""
				className="input input-bordered input-sm flex items-center gap-2"
			>
				<MdLock className="text-gray-400" />
				<input type="text" className="" placeholder="passowrd" />
			</label>
			<EmailButton />
		</div>
	);
};

export default EmailIForm;
