"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import Link from "next/link";
import React from "react";
import { FaPerson } from "react-icons/fa6";
import { useSelector } from "react-redux";
import CommonPoint from "./CommonPoint";
import Job from "./Job";
import Skills from "./Skills";

const ShowResult = () => {
	const diagnosis = useSelector((state: storeType) => state.userDiagnosis);
	return (
		<>
			{diagnosis.userId ? (
				<div className="flex w-full flex-col justify-between gap-5 px-1 pt-5 lg:flex-row">
					<div className="flex w-full flex-col gap-20 rounded-md bg-green-100 bg-opacity-60 p-5 lg:w-1/2">
						<Job />
						<CommonPoint />
					</div>
					<Skills />
				</div>
			) : (
				<div className="mt-5">
					<div className="">診断結果がありません💦</div>
					<Link href="/diagnosisPage" className="btn btn-md mt-4 shadow-md">
						<FaPerson className="w-5 h-5" />
						<span>今すぐ診断</span>
					</Link>
				</div>
			)}
		</>
	);
};

export default ShowResult;
