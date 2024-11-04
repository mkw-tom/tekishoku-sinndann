import React from "react";
import EmailIForm from "./EmailForm";
import GitHubButton from "./GitHubButton";
import GoogleButton from "./GoogleButton";

const LoginForm = () => {
	return (
		<section className="flex flex-col gap-10 w-4/12 h-lvh bg-base-100 bg-opacity-60 ">
			<div className="text-xl text-center mt-20  font-bold ">
				<button type="button" className="border-b-4 px-3 border-info text-info">
					新規登録
				</button>
				<button type="button" className=" px-3">
					ログイン
				</button>
			</div>
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
		</section>
	);
};

export default LoginForm;
