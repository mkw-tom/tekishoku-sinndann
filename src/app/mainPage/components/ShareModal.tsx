import type { storeType } from "@/app/types/ReduxTypes";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { useSelector } from "react-redux";
import { TwitterShareButton } from "react-share";

const ShareModal = () => {
	const user = useSelector((state: storeType) => state.auth);
	const userDiagnosis = useSelector((state: storeType) => state.userDiagnosis);
	const diagnosisList = userDiagnosis.jobProposals
		.map((job: string, index: number) => `${index + 1}. ${job}`)
		.join("\n");

	const URL = "https://tekishoku-sinndann.vercel.app";
	const QUOTE = `【 WorkME -AI適職診断- 】
  ${user.username}さんの診断結果
  ${diagnosisList}
  
  ↓↓今すぐ診断↓↓
  ${URL}
  
  #WorkME
  #AI適職診断
  #mbti
  `;

	return (
		<div className="flex flex-col gap-5 items-center">
			{/* <h2>SNSで適職をシェア</h2> */}
			<div className="flex flex-col gap-5 items-center justify-center mx-auto w-11/12 ">
				{/* <FacebookShareButton
					url={URL}
					title={QUOTE}
					className="flex flex-col items-center gap-1"
				>
					<FacebookIcon size={50} round />
					<p>facebook</p>
				</FacebookShareButton> */}
				<p className="text-lg flex items-center gap-1 mb-3">
					<BsTwitterX />
					<span>で診断結果をシェアしよう！</span>
				</p>
				<div className="bg-black w-16 h-16 flex items-center justify-center text-3xl rounded-full">
					<BsTwitterX className="bg-black text-white" />
				</div>
				<TwitterShareButton
					url={URL}
					title={QUOTE}
					className="flex flex-col items-center"
				>
					<button type="button" className="flex items-center btn btn-outline">
						{/* <BsTwitterX /> */}
						<span>あなたの適職を投稿する</span>
					</button>
				</TwitterShareButton>
			</div>
		</div>
	);
};

export default ShareModal;
