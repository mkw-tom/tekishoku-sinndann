import React from "react";

const Loading = () => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-60 ">
			<div className="mx-auto flex h-full w-28 flex-col items-center justify-center lg:text-xl">
				<span className="font-bold tracking-wider text-base-100 dark:text-info">
					AIが解析中
				</span>
				{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
				<span className="loading loading-bars loading-lg text-base-100  dark:text-info"></span>
			</div>
		</div>
	);
};

export default Loading;
