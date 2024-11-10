"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
	const handleLogout = async () => {
		await signOut({ callbackUrl: "/" });
	};
	return (
		<button
			type="button"
			className="btn btn-sm md:btn-md shadow-xl "
			onClick={handleLogout}
		>
			<span className="hidden md:block">Logout</span>
			<FiLogOut />
		</button>
	);
};

export default LogoutButton;
