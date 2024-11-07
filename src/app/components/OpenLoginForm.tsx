import React from "react";
import { CgSearchFound } from "react-icons/cg";
import MoealLoginForm from "./loginForm/MoealLoginForm";

const OpenLoginForm = () => {
	const OpenLoginFormFunc = () => {
		const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
		modal?.showModal();
	};
	return (
		<div className="w-full flex justify-center lg:hidden">
			<button type="button" className="btn mx-auto" onClick={OpenLoginFormFunc}>
				<CgSearchFound className="h-5 w-5" />
				今すぐ診断する
			</button>
			<dialog id="my_modal_3" className="modal">
				<div className="modal-box w-full h-[700px] bg-base-100">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
					</form>
					<MoealLoginForm />
				</div>
			</dialog>
		</div>
	);
};

export default OpenLoginForm;
