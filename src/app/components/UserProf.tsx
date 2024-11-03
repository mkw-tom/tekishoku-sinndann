"use client";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import type { storeType } from "../types/ReduxTypes";

const UserProf = () => {
	const user = useSelector((state: storeType) => state.auth);
	return (
		<div className="w-full relative group">
			<img
				src={user?.profilePicture as string}
				// biome-ignore lint/a11y/noRedundantAlt: <explanation>
				alt="User's profile picture"
				className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-base-100 shadow-xl"
			/>
			<div className="hidden bg-base-200 w-96 h-20 absolute right-1 -top-2 rounded-md group-hover:flex items-center px-5 gap-2 ">
				<img
					src={user?.profilePicture as string}
					// biome-ignore lint/a11y/noRedundantAlt: <explanation>
					alt="User's profile picture"
					className="w-12 h-12 rounded-full border-2 border-base-100 "
				/>
				<h3 className="text-xl">{user.username}</h3>
				<p className="text-md ml-auto">性格タイプ：INTJ</p>
			</div>
		</div>
	);
};

export default UserProf;
