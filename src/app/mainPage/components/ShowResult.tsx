"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import Link from "next/link";
import React from "react";
import { CgSearchFound } from "react-icons/cg";
import { useSelector } from "react-redux";
import CommonPoint from "./CommonPoint";
import Job from "./Job";
import Skills from "./Skills";
// import { MdPerson } from "react-icons/md";

const ShowResult = () => {
	const diagnosis = useSelector((state: storeType) => state.userDiagnosis);
	return (
		<>
			{diagnosis.userId ? (
				<div className="flex w-full flex-col justify-between gap-5 px-1 pt-5 lg:flex-row">
					<div className="flex w-full flex-col gap-5 rounded-md bg-green-100 bg-opacity-60 p-5 lg:w-1/2">
						{/* <h3 className="group text-lgmd:text-xl mb-3 flex items-center font-bol text-base-100 font-bold">
              <MdPerson />
              MBTI： 
							<div className="hidden group-hover:block tooltip tooltip-open tooltip-top left-10 bottom-3" data-tip="クリックで詳細を見る">
							</div>
							<a href="https://www.16personalities.com/ja/intj%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC" target="block" className="btn btn-sm btn-link text-purple-500 text-lg">INTJ</a>
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
