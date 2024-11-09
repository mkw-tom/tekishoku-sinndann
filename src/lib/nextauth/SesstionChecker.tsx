"use client";
import type { storeType } from "@/app/types/ReduxTypes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../redux/slices/auth";
import { setUserDiagnosis } from "../redux/slices/userDiagnosis";

const SesstionChecker = ({ children }: { children: ReactNode }) => {
	const { data: session, status } = useSession();
	const router = useRouter();
	const dispatch = useDispatch();
	const user = useSelector((state: storeType) => state.auth);

	const getUserAndDiagnosisDatas = async () => {
		const token = session?.accessToken;
		const res = await fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		const jsonData = await res.json();
		if (!jsonData) {
			return console.log("data is not found");
		}

		if (jsonData?.userData) {
			dispatch(
				setUser({
					id: jsonData.userData._id,
					username: jsonData.userData.username,
					password: jsonData.userData.password,
					profilePicture: jsonData.userData.profilePicture,
					email: jsonData.userData.email,
				}),
			);
			if (jsonData?.diagnosisData) {
				dispatch(
					setUserDiagnosis({
						userId: jsonData?.diagnosisData.userId,
						commonPoints: jsonData?.diagnosisData.commonPoints,
						jobProposals: jsonData?.diagnosisData.jobProposals,
						skillScores: jsonData?.diagnosisData.skillScores,
						timestamp: jsonData?.diagnosisData.timestamp,
					}),
				);
			}
			console.log(jsonData);
		} else {
			dispatch(clearUser());
		}
	};
	console.log(user);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (status === "authenticated") {
			getUserAndDiagnosisDatas();
			router.push("/mainPage");
		} else if (status === "unauthenticated") {
			router.push("/");
		}
	}, [status]);

	return <div>{children}</div>;
};

export default SesstionChecker;
