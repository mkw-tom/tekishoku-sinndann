import React from "react";
import EmailIForm from "./EmailForm";
import GitHubButton from "./GitHubButton";
import GoogleButton from "./GoogleButton";
import LoginSwitch from "./LoginSwitch";

const MoealLoginForm = () => {
	return (
		<div className="flex flex-col gap-10 w-full h-lvh ">
			<LoginSwitch />
			<div className="flex flex-col gap-3">
				<div className="w-8/12 mx-auto">
					<GoogleButton />
				</div>

				<div className="w-8/12 mx-auto">
					<GitHubButton />

					<hr className="my-10" />
				</div>

				<EmailIForm />
			</div>
		</div>
	);
};

export default MoealLoginForm;
