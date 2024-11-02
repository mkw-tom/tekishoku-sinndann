// /* eslint-disable @next/next/no-img-element */
// // import {
// //   Add,
// //   ArrowDropDown,
// //   Highlight,
// //   Psychology,
// //   QueryStats,
// //   SupportAgent,
// // } from '@mui/icons-material'
// // import ButtonTopText from "./ButtonTopText";
// // import MigrateButton from "./MigrateButton";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { MdKeyboardDoubleArrowDown } from "react-icons/md";
// import { MdOutlineSupportAgent } from "react-icons/md";
// import { MdPsychology } from "react-icons/md";
// import { MdHighlight } from "react-icons/md";
// import { MdOutlineQueryStats } from "react-icons/md";
// import ButtonTopText from "./ButtonTopText";
// import MigrateButton from "./MigrateButton";
import React from "react";
import { FaCheckCircle, FaCircle, FaGithub, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock, MdPassword } from "react-icons/md";

const FirstView = () => {
	return (
		<main className="h-lvh  bg-gradient-to-tr to-info from-success">
			<div className="flex flex-row-reverse ">
				<section className="flex flex-col gap-10 w-4/12 h-lvh bg-base-100 bg-opacity-60">
					<div className="text-xl text-center mt-20 text-success font-bold ">
						<button type="button" className="border-b-4 px-3 border-success">
							新規登録
						</button>
						<button type="button" className=" px-3">
							ログイン
						</button>
					</div>
					<div className="flex flex-col gap-3">
						<div className="w-7/12 mx-auto">
							<button type="button" className="btn  btn-xl w-full text-lg">
								<FcGoogle className="w-7 h-7" />
								Googleで新規登録
							</button>
						</div>

						<div className="w-7/12 mx-auto">
							<button type="button" className="btn  btn-xl w-full text-lg">
								<FaGithub className="w-7 h-7 " />
								GitHubで新規登録
							</button>

							<hr className="my-10" />
						</div>
						<div className="w-7/12 mx-auto flex flex-col gap-3">
							<label
								htmlFor=""
								className="input input-bordered input-sm flex items-center gap-2"
							>
								<FaUser className="text-gray-400" />
								<input type="text" className="" placeholder="username" />
							</label>
							<label
								htmlFor=""
								className="input input-bordered input-sm flex items-center gap-2"
							>
								<MdEmail className="text-gray-400" />
								<input type="text" className="" placeholder="email" />
							</label>
							<label
								htmlFor=""
								className="input input-bordered input-sm flex items-center gap-2"
							>
								<MdLock className="text-gray-400" />
								<input type="text" className="" placeholder="passowrd" />
							</label>

							<button type="button" className="btn  btn-xl w-full text-lg">
								<MdEmail className="w-7 h-7 " />
								Emailで新規登録
							</button>
						</div>
					</div>
				</section>
				<section className="w-8/12 h-lvh ">
					<div className="flex flex-col w-11/12 my-20 gap-10">
						<div className="text-center py-2 w-full mx-auto">
							<h1 className="text-6xl font-mono tracking-wider mx-auto font-bold ">
								<span className="">Work</span>
								<span className="">ME</span>
							</h1>
							<p className="text-2xl mx-auto mt-3">
								「MBTI」 × 「スキル・志向性」によるAI適職診断
							</p>
						</div>
						<div className="w-full">
							<img src="/teamwork.png" alt="" className="w-9/12 mx-auto" />
							<p className="text-xl text-center flex items-center mx-auto justify-center mt-5">
								<FaCheckCircle />「 WorkME 」はあなたのミライの選択肢を広げます
							</p>
						</div>
					</div>

					{/* <div className="flex w-56 mx-auto gap-2 justify-center mt-10"><FaCircle /><FaCircle /><FaCircle /></div> */}
				</section>
			</div>
		</main>
		// <div className="">
		// 	<div className="mb-24 mt-32 flex h-auto flex-col items-center justify-center  gap-3 sm:gap-5">
		// 		{/* <p className='font-bold text-lg'>ジ ョ ビ ッ ト</p> */}
		// 		<h1 className="font-mono text-4xl font-extrabold tracking-widest text-gray-700 dark:text-base-300 md:text-7xl">
		// 			<span className="text-info">Work</span>
		// 			<span className="text-success">ME</span>
		// 		</h1>{" "}
		// 		{/* <span className="mt-5 font-mono text-xl sm:text-3xl">with</span> */}
		// 		{/* <div className="flex items-center">
		//       <img src="/file.png" className="size-12 md:size-16"></img>

		//       <span className=" bg-gradient-to-r from-info to-orange-400 bg-clip-text font-mono text-2xl font-bold tracking-widest text-transparent sm:text-5xl">
		//         Entrix
		//       </span>
		//     </div> */}
		// 	</div>

		// 	<div className="text-md mx-auto w-full sm:text-lg md:text-2xl">
		// 		<p className="text-center">
		// 			<span>あなたの</span>
		// 			<span className="text-success">「MBTI」</span> ×{" "}
		// 			<span className="text-info">「能力・志向性」</span>{" "}
		// 			から適した職業を分析
		// 		</p>
		// 	</div>

		// 	<MigrateButton />

		// 	<div className="mt-40 mb-10 w-full text-center font-mono text-2xl font-bold md:text-4xl">
		// 		<p className="mb-5 border-b-2 border-gray-700 px-2 pb-1 tracking-widest text-gray-700  dark:text-white flex w-64 dark:border-white mx-auto">
		// 			{/* <QueryStats style={{ fontSize: "30px" }} /> */}
		// 			<MdOutlineQueryStats className="" />
		// 			<span className="ml-1">分析の流れ</span>
		// 		</p>
		// 	</div>
		// 	<div className="h-auto w-full bg-base-200 px-2 py-10 dark:bg-gray-600 lg:px-10 lg:py-16">
		// 		<div className="mx-auto flex w-full flex-col items-center justify-between gap-10 lg:flex-row ">
		// 			<div className="flex h-auto w-full flex-col items-center lg:w-2/5">
		// 				<h3 className="font-mono text-2xl font-bold tracking-widest text-success md:text-4xl ">
		// 					MBTIの性格特性
		// 				</h3>
		// 				<img
		// 					src="/peoples.png"
		// 					alt=""
		// 					className=" w-full sm:w-3/5 lg:w-full"
		// 				/>
		// 			</div>

		// 			<div className="items-scenter flex h-auto w-full flex-col justify-center gap-20 lg:w-2/5 ">
		// 				<h3 className="text-center font-mono text-2xl font-bold tracking-widest text-info md:text-4xl">
		// 					能力・志向性
		// 				</h3>
		// 				<div className="flex h-auto w-full justify-center">
		// 					<div className="-mr-10 flex size-40 items-center justify-center rounded-full bg-orange-500 bg-opacity-70 text-center md:size-48 lg:size-56 xl:size-72">
		// 						<p className=" text-md z-10 font-mono font-extrabold tracking-widest lg:text-xl xl:text-2xl">
		// 							スキル・経験
		// 						</p>
		// 					</div>
		// 					<div className="flex size-40 items-center justify-center rounded-full bg-info bg-opacity-70 text-center md:size-48 lg:size-56 xl:size-72  ">
		// 						<p className="text-md z-10 font-mono font-bold tracking-widest lg:text-xl xl:text-2xl">
		// 							興味・志向
		// 						</p>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<IoMdArrowDropdown className="block w-16 h-16 text-gray-700 mx-auto my-20" />
		// 		{/* <ArrowDropDown
		//       sx={{
		//         fontSize: "4rem",
		//         marginX: "auto",
		//         marginY: "30px",
		//         textAlign: "center",
		//         display: "block",
		//       }}
		//     /> */}
		// 		<div className="mx-auto w-9/12 rounded-md bg-gray-700 p-2 ">
		// 			<h2 className="flex w-full items-center justify-center gap-1 text-center text-2xl font-bold">
		// 				<img src="/AIicon.png" alt="" className="w-[40px] sm:w-[60px]" />
		// 				<p className="bg-gradient-to-r from-info to-orange-400 bg-clip-text text-lg font-bold tracking-widest text-transparent sm:text-4xl md:text-2xl">
		// 					AIによる分析
		// 				</p>
		// 			</h2>
		// 		</div>
		// 		<MdKeyboardDoubleArrowDown className="block w-16 h-16 text-gray-700 mx-auto my-20" />

		// 		{/* <ArrowDropDown
		//       sx={{
		//         fontSize: "4rem",
		//         marginX: "auto",
		//         marginY: "30px",
		//         textAlign: "center",
		//         display: "block",
		//       }}
		//     /> */}
		// 		<ul className="mx-auto w-9/12 grid-flow-row grid-cols-2 gap-5 md:grid">
		// 			<li className="flex items-center justify-center  gap-1 rounded-md border-2 border-info p-3 text-center text-lg font-bold tracking-wider text-info shadow-md md:text-2xl">
		// 				{/* <SupportAgent style={{ fontSize: "32px" }} /> */}
		// 				<MdOutlineSupportAgent className="block w-8 h-8 mr-2" />
		// 				<span>職業の提案</span>
		// 			</li>
		// 			<li className="mt-2 flex items-center justify-center  gap-1 rounded-md border-2 border-info p-3 text-center text-lg font-bold tracking-wider text-info shadow-md md:mt-0 md:text-2xl">
		// 				{/* <Psychology style={{ fontSize: "32px" }} /> */}
		// 				<MdPsychology className="block w-8 h-8 mr-2" />
		// 				<span>能力スコアの算出</span>
		// 			</li>
		// 		</ul>
		// 		{/* <ArrowDropDown
		//       sx={{
		//         fontSize: "4rem",
		//         marginX: "auto",
		//         marginY: "30px",
		//         textAlign: "center",
		//         display: "block",
		//       }}
		//     /> */}

		// 		<h2 className="mx-auto mt-3 flex w-9/12  items-center justify-center gap-1 rounded-md bg-info p-3 text-center text-lg font-bold tracking-widest text-white shadow-lg md:text-2xl">
		// 			{/* <Highlight style={{ fontSize: "32px" }} /> */}
		// 			<MdHighlight className="block w-9 h-9 mr-2 " />
		// 			<span>企業選びのヒントに</span>
		// 		</h2>
		// 	</div>
		// 	<ButtonTopText />
		// 	<MigrateButton />
		// </div>
	);
};

export default FirstView;
