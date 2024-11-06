"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import React from "react";
import { useSelector } from "react-redux";

const WarnWrite = () => {
	const diagnosis = useSelector((state: storeType) => state.userDiagnosis);
	return (
		<p
			className={`${diagnosis?.userId ? "sm:text-md mt-10 text-right text-xs text-red-500" : "hidden"}`}
		>
			*この結果は、あなたの適職を断言するものではありません。
			あくまで参考程度でお願いいたします。
		</p>
	);
};

export default WarnWrite;
