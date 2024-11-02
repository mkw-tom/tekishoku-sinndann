"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";

const SesstionChecker = ({ children }: { children: ReactNode }) => {
	const { data: session, status } = useSession();
	const router = useRouter();
	console.log(session);
	console.log(status);

	useEffect(() => {
		if (session === null || undefined) {
			return router.push("/");
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			return router.push("/");
		}
	}, [router, session]);
	return <div>{children}</div>;
};

export default SesstionChecker;
