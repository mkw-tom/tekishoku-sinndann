"use client";
import React from "react";
import { MdEmail } from "react-icons/md";

const EmailButton = () => {
	return (
		<button type="button" className="btn  btn-xl w-full text-lg">
			<MdEmail className="w-7 h-7 " />
			Emailで新規登録
		</button>
	);
};

export default EmailButton;
