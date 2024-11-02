"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
	return (
		<button type="button" className="btn  btn-xl w-full text-lg">
			<FcGoogle className="w-7 h-7" />
			Googleで新規登録
		</button>
	);
};

export default GoogleButton;
