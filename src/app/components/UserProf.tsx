"use client";
import React from "react";
import { useSelector } from "react-redux";
import type { storeType } from "../types/ReduxTypes";

const UserProf = () => {
	const user = useSelector((state: storeType) => state.auth);
	return (
		<div className="w-full relative group">
			<img
				src={(user?.profilePicture as string) || "/default_icon.png"}
				// biome-ignore lint/a11y/noRedundantAlt: <explanation>
				alt="Users profile picture"
				className="size-8 md:size-12 rounded-full border-2 border-base-100 shadow-xl"
			/>
			<div className="hidden bg-base-200 w-56 md:w-72 h-12 md:h-20 absolute right-1 -top-2 rounded-md group-hover:flex items-center px-5 gap-2 shadow-xl">
				<img
					src={(user?.profilePicture as string) || "/default_icon.png"}
					// biome-ignore lint/a11y/noRedundantAlt: <explanation>
					alt="User's profile picture"
					className="size-8 md:size-12 rounded-full  "
				/>
				<h3 className="text-lg md:text-xl mr-2">{user.username}</h3>
			</div>
		</div>
	);
};

export default UserProf;
