"use client";
// import { clearUser } from '@/lib/redux/slices/auth';
// import type { storeType } from '@/lib/redux/store';
import { signOut } from "next-auth/react";
import React from "react";
// import { useDispatch, useSelector } from 'react-redux';

const LogoutButton = () => {
	// const dispatch = useDispatch();
	// const user = useSelector((state: storeType) => state.auth);

	const handleLogout = async () => {
		await signOut({ callbackUrl: "/" });

		// dispatch(clearUser());
		// console.log(user)
	};
	return (
		<button type="button" className="btn btn-primary" onClick={handleLogout}>
			LogoutButton
		</button>
	);
};

export default LogoutButton;
