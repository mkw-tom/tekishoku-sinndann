import React from "react";
import { FaCheckCircle, FaCircle, FaGithub, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock, MdPassword } from "react-icons/md";
// import Image from "next/image";
import FirstView from "./components/FirstView";
import RightView from "./components/RightView";
import LoginForm from "./components/loginForm/LoginForm";

export default function Home() {
	return (
		<main className="h-lvh  bg-gradient-to-tr to-info from-success">
			<div className="flex flex-row ">
				<RightView />
				<LoginForm />
			</div>
		</main>
	);
}
