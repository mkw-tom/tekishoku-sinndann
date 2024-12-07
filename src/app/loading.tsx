import React from "react";

const loading = () => {
	return (
		<div className="h-lvh  bg-gradient-to-tr to-info from-success">
			<div className="mx-auto flex h-full w-28 flex-col items-center justify-center lg:text-xl">
				<span className="font-bold tracking-wider text-base-100 dark:text-info">
					Loading
				</span>
				{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
				<span className="loading loading-bars loading-lg text-base-100  dark:text-info"></span>
			</div>
		</div>
	);
};

export default loading;
