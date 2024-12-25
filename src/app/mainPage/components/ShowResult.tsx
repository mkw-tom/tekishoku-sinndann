"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CgSearchFound } from "react-icons/cg";
import { MdPerson } from "react-icons/md";
import { useSelector } from "react-redux";
import CommonPoint from "./CommonPoint";
import Job from "./Job";
import Skills from "./Skills";

const ShowResult = () => {
	const diagnosis = useSelector((state: storeType) => state.userDiagnosis);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (diagnosis) {
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
		}
	}, [diagnosis]);

	/// MBTI種類別の色わけ
	const changeColorMBTI = (mbti: string): string => {
		// MBTIを色分け
		switch (true) {
			case /^[EI]NT[JP]$/.test(mbti): // ○NT○（紫）
				return "text-purple-600";
			case /^[EI]NF[JP]$/.test(mbti): // ○NF○（緑）
				return "text-green-700";
			case /^[EI]S[T|F]J$/.test(mbti): // ○S○J（水色）
				return "text-info";
			case /^[EI]S[T|F]P$/.test(mbti): // ○S○P（黄色）
				return "text-yellow-700";
			default:
				return "gray"; // 未分類の場合のデフォルト色
		}
	};

	//　-----------画面切り替え-------------
	const successUI = () => {
		return (
			<div className="flex w-full flex-col justify-between gap-5 px-1 pt-5 lg:flex-row">
				<div className="flex w-full flex-col gap-5 rounded-md bg-green-100 bg-opacity-60 p-5 lg:w-1/2">
					<h3 className="group text-md md:text-lg mb-3 flex items-center font-bold dark:text-gray-700">
						<MdPerson />
						あなたのMBTI：
						<div
							className="hidden group-hover:block tooltip tooltip-open tooltip-top left-10 bottom-3"
							data-tip="クリックで詳細を見る"
						/>
						<a
							href={`https://www.16personalities.com/ja/${diagnosis.mbti}%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC`}
							target="block"
							className={`btn btn-sm btn-link ${changeColorMBTI(
								diagnosis.mbti,
							)} text-lg md:text-xl`}
						>
							{diagnosis.mbti}
						</a>
					</h3>
					<Job />
					<CommonPoint />
				</div>
				<Skills />
			</div>
		);
	};

	const emptyUI = () => {
		return (
			<div className={`mt-5 ${diagnosis?.userId ? "hidden" : "block"} `}>
				<div className="dark:text-gray-800 font-bold">
					診断結果がありません💦
				</div>
				<Link href="/diagnosisPage" className="btn btn-md mt-4 shadow-md">
					<CgSearchFound className="w-5 h-5" />
					<span>今すぐ診断</span>
				</Link>
			</div>
		);
	};

	return (
		<>
			{isLoading ? (
				<div className="flex flex-col justify-center items-center h-full mt-36">
					<span className="loading loading-bars loading-md sm:loading-lg dark:text-gray-700" />
					<span className="ml-3 text-sm sm:text-lg font-bold dark:text-gray-700">
						Loading...
					</span>
				</div>
			) : //------------画面切り替えーーーーーーーー
			diagnosis?.userId ? (
				successUI()
			) : (
				emptyUI()
			)}
		</>
	);
};

export default ShowResult;
