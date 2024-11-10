import React from "react";
import EmailIForm from "./EmailForm";
import GitHubButton from "./GitHubButton";
import GoogleButton from "./GoogleButton";
import LoginSwitch from "./LoginSwitch";

const LoginForm = () => {
	return (
		<section className="hidden lg:flex flex-col gap-10 lg:w-4/12 h-lvh bg-base-100 bg-opacity-60">
			<LoginSwitch />
			<div className="flex flex-col gap-3">
				<div className="w-9/12 lg:w-7/12 mx-auto">
					<GoogleButton />
				</div>

				<div className="w-9/12 lg:w-7/12 mx-auto">
					<GitHubButton />

					<hr className="my-10" />
				</div>

				<EmailIForm />
			</div>
		</section>
	);
};

export default LoginForm;
