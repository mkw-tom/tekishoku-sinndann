import Link from "next/link";
import React from "react";
import CommonPoint from "./components/CommonPoint";
import Job from "./components/Job";
import LogoutButton from "./components/LogoutButton";
import Skills from "./components/Skills";

const Page = () => {
	return (
		<main className="h-auto bg-opacity-60 bg-gradient-to-tr to-info from-success dark:bg-gray-800">
			<LogoutButton />
			<div className="mx-5 h-full pb-20 pt-10 md:mx-10 ">
				{/* <h1 className="w-full font-mono text-xl font-bold tracking-widest"></h1> */}
				<div className="mx-auto mt-10 w-11/12">
					<h2 className="flex items-center justify-between border-b-2 border-b-gray-800 font-bold tracking-wider">
						<span className="text-2xl text-gray-800">AIの診断結果</span>
						<div className="flex gap-2 pb-1">
							<Link
								href="/diagnosisPage"
								className="btn btn-xs sm:btn-sm md:btn-md"
							>
								再診断
							</Link>
							<Link
								href="/diagnosisPage"
								className="btn btn-xs sm:btn-sm md:btn-md "
							>
								結果をシェア
							</Link>
						</div>
					</h2>
					<div className="flex w-full flex-col justify-between gap-5 px-1 pt-5 lg:flex-row">
						<div className="flex w-full flex-col gap-20 rounded-md bg-base-100 bg-opacity-60 p-5 lg:w-1/2">
							<Job />
							<CommonPoint />
						</div>
						<Skills />
					</div>
					<p className="sm:text-md mt-10 text-right text-xs text-red-500">
						*この結果は、あなたの適職を断言するものではありません。
						あくまで参考程度でお願いいたします。
					</p>
				</div>
			</div>
		</main>
	);
};

export default Page;
