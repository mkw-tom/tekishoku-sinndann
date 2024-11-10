"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import OpenLoginForm from "./OpenLoginForm";

const RightView = () => {
	return (
		<section className="w-full lg:w-8/12 h-lvh mx-auto ">
			<div className="flex flex-col w-11/12 my-20 gap-10 mx-auto">
				<div className="text-center py-2 w-full mx-auto">
					<h1 className="text-4xl md:text-6xl font-mono tracking-wider mx-auto font-bold flex items-center justify-center gap-3 md:gap-5">
						<span className="text-base-100 tracking-widest">WorkME</span>
					</h1>
					<p className="text-md md:text-2xl mx-auto mt-3 text-base-100">
						「MBTI」 × 「スキル・志向性」によるAI適職診断
					</p>
				</div>
				<div className="w-full">
					<img src="/teamwork.png" alt="" className="min-w-80 w-9/12 mx-auto" />
					<p className="text-sm md:text-xl text-center flex items-center mx-auto justify-center mt-10 text-base-100">
						<FaCheckCircle className="mr-2" />
						WorkMEであなたの将来の選択肢を広げよう！
					</p>
				</div>
			</div>
			<OpenLoginForm />
		</section>
	);
};

export default RightView;
