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
				<div className="w-7/12 mx-auto">
					<GoogleButton />
					{/* <button type="button" className="btn  btn-xl w-full text-lg">
                <FcGoogle className="w-7 h-7" />
                Googleで新規登録
              </button> */}
				</div>

				<div className="w-7/12 mx-auto">
					{/* <button type="button" className="btn  btn-xl w-full text-lg">
                <FaGithub className="w-7 h-7 " />
                GitHubで新規登録
              </button> */}
					<GitHubButton />

					<hr className="my-10" />
				</div>

				<EmailIForm />
			</div>
		</div>
	);
};

export default MoealLoginForm;
