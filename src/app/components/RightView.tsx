"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const RightView = () => {
	return (
		<section className="w-8/12 h-lvh ">
			<div className="flex flex-col w-11/12 my-20 gap-10">
				<div className="text-center py-2 w-full mx-auto">
					<h1 className="text-6xl font-mono tracking-wider mx-auto font-bold text-base-300">
						<span className="">Work</span>
						<span className="">ME</span>
					</h1>
					<p className="text-2xl mx-auto mt-3 text-base-300">
						「MBTI」 × 「スキル・志向性」によるAI適職診断
					</p>
				</div>
				<div className="w-full">
					<img src="/teamwork.png" alt="" className="w-9/12 mx-auto" />
					<p className="text-xl text-center flex items-center mx-auto justify-center mt-5 text-base-300">
						<FaCheckCircle />「 WorkME 」はあなたのミライの選択肢を広げます
					</p>
				</div>
			</div>

			{/* <div className="flex w-56 mx-auto gap-2 justify-center mt-10"><FaCircle /><FaCircle /><FaCircle /></div> */}
		</section>
	);
};

export default RightView;
