"use client";
import React from "react";
import LogoutButton from "./LogoutButton";
import UserProf from "./UserProf";

const Header = () => {
	return (
		<header className="fixed top-0 right-0 left-0  pt-3">
			<div className="mx-8 flex justify-between">
				<h1 className="text-3xl font-bold font-mono tracking-wider text-white flex items-center gap-2">
					<img
						src="/file.png"
						alt="ロゴ"
						className="w-8 h-8 border-2 rounded-md border-white"
					/>
					<span>WorkME</span>
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
