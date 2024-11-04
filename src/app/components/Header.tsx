"use client";
import React from "react";
import { useSelector } from "react-redux";
import type { storeType } from "../types/ReduxTypes";
import LogoutButton from "./LogoutButton";
import UserProf from "./UserProf";

const Header = () => {
	const user = useSelector((state: storeType) => state.auth);

	return (
		<header
			className={`${user.id ? "fixed" : "hidden"} top-0 right-0 left-0  pt-3`}
		>
			<div className="mx-8 flex justify-between">
				<h1 className="text-3xl font-bold font-mono tracking-wider text-base-300">
					WorkME
				</h1>
				<div className="w-auto flex items-center justify-items-end gap-3">
					<UserProf />
					<LogoutButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
