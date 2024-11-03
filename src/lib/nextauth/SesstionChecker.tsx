"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";

const SesstionChecker = ({ children }: { children: ReactNode }) => {
	const { status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "authenticated") {
			router.push("/mainPage");
		} else if (status === "unauthenticated") {
			router.push("/");
		}
	}, [router, status]);

	return <div>{children}</div>;
};

export default SesstionChecker;
