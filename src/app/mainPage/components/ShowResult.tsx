"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CgSearchFound } from "react-icons/cg";
import { useSelector } from "react-redux";
import CommonPoint from "./CommonPoint";
import Job from "./Job";
import Skills from "./Skills";

const ShowResult = () => {
	const diagnosis = useSelector((state: storeType) => state.userDiagnosis);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			if (diagnosis) {
				setIsLoading(false);
			}
		}, 2000);
	}, [diagnosis]);

	return (
		<>
			{isLoading ? (
				<div className="flex justify-center items-center h-full mt-20">
					<span className="loading loading-spinner loading-md sm:loading-lg" />
					<span className="ml-3 text-sm sm:text-lg">
						診断結果を読み込んでいます...
					</span>
				</div>
			) : diagnosis.userId ? (
				<div className="flex w-full flex-col justify-between gap-5 px-1 pt-5 lg:flex-row">
					<div className="flex w-full flex-col gap-5 rounded-md bg-green-100 bg-opacity-60 p-5 lg:w-1/2">
						{/* <h3 className="group text-lgmd:text-xl mb-3 flex items-center font-bol text-base-100 font-bold">
							あなたのMBTI：
							<div
								className="hidden group-hover:block tooltip tooltip-open tooltip-top left-10 bottom-3"
								data-tip="クリックで詳細を見る"
							/>
							<a
								href="https://www.16personalities.com/ja/intj%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC"
								target="block"
								className="btn btn-sm btn-link text-purple-500 text-lg"
							>
								INTJ
							</a>
						</h3> */}
						<Job />
						<CommonPoint />
					</div>
					<Skills />
				</div>
			) : (
				<div className="mt-5">
					<div className="">診断結果がありません💦</div>
					<Link href="/diagnosisPage" className="btn btn-md mt-4 shadow-md">
						<CgSearchFound className="w-5 h-5" />
						<span>今すぐ診断</span>
					</Link>
				</div>
			)}
		</>
	);
};

export default ShowResult;
