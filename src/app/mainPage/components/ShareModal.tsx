import type { storeType } from "@/app/types/ReduxTypes";
import React from "react";
import { useSelector } from "react-redux";
import {
	FacebookIcon,
	FacebookShareButton,
	HatenaIcon,
	HatenaShareButton,
	LineIcon,
	LineShareButton,
	TwitterIcon,
	TwitterShareButton,
} from "react-share";

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
  ${URL}`;

	return (
		<div className="flex flex-col gap-5 items-center">
			<h2>SNSで適職をシェア</h2>
			<div className="flex gap-5 items-end justify-between mx-auto w-11/12 ">
				<FacebookShareButton
					url={URL}
					title={QUOTE}
					className="flex flex-col items-center gap-1"
				>
					<FacebookIcon size={50} round />
					<p>facebook</p>
				</FacebookShareButton>
				<TwitterShareButton
					url={URL}
					title={QUOTE}
					className="flex flex-col items-center gap-1"
				>
					<TwitterIcon size={50} round />
					<p>Twitter</p>
				</TwitterShareButton>
				<LineShareButton
					url={URL}
					title={QUOTE}
					className="flex flex-col items-center gap-1"
				>
					<LineIcon size={50} round />
					<p>Line</p>
				</LineShareButton>
				<HatenaShareButton
					url={URL}
					title={QUOTE}
					windowWidth={660}
					windowHeight={460}
					className="flex flex-col items-center gap-1"
				>
					<HatenaIcon size={50} round />
					<p>はてな</p>
				</HatenaShareButton>
			</div>
		</div>
	);
};

export default ShareModal;
