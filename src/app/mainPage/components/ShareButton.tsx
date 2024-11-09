"use client";

import ShareModal from "./ShareModal";

const ShareButton = () => {
	const OpenLoginFormFunc = () => {
		const modal = document.getElementById("my_modal_4") as HTMLDialogElement;
		modal?.showModal();
	};
	return (
		<>
			<div className="w-full flex justify-center ">
				<button
					type="button"
					className="btn mx-auto"
					onClick={OpenLoginFormFunc}
				>
					{/* <CgSearchFound className="h-5 w-5" /> */}
					シェア
				</button>
				<dialog id="my_modal_4" className="modal">
					<div className="modal-box w-full h-[170px] bg-base-100">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
							<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
								✕
							</button>
						</form>
						<ShareModal />
					</div>
				</dialog>
			</div>
		</>
	);
};

export default ShareButton;