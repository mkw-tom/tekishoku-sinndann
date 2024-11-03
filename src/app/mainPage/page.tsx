import Link from "next/link";
import React from "react";
import CommonPoint from "./components/CommonPoint";
import Job from "./components/Job";
import ShowResult from "./components/ShowResult";
import Skills from "./components/Skills";

const Page = () => {
	return (
		<main className="h-lvh bg-opacity-60 bg-gradient-to-tr to-info from-success">
			<div className="mx-5 h-full pb-20 pt-20 md:mx-10 ">
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
								シェア
							</Link>
						</div>
					</h2>
					<ShowResult />
					{/* <p className="sm:text-md mt-10 text-right text-xs text-red-500">
						*この結果は、あなたの適職を断言するものではありません。
						あくまで参考程度でお願いいたします。
					</p> */}
				</div>
			</div>
		</main>
	);
};

export default Page;
