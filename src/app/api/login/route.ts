"use server";

import { DiagnosissModel } from "@/lib/mongoDB/models/Diagnosis";
import { UserModel } from "@/lib/mongoDB/models/User";
import connectDB from "@/lib/mongoDB/mongo";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

//ユーザーの登録データを全件取得
export async function POST(req: NextRequest) {
	await connectDB();

	const decoded = await getToken({ req, secret: process.env.JWT_SECRET });

	// if (!decoded) {
	//   return new NextResponse(`unauthoriz ${decoded}`, { status: 401 })
	// } else {
	//   // console.dir(decoded)
	//   console.log(`success authoriz!!`)
	// }
	const userEmail = decoded?.email;

	if (!userEmail) {
		return new Response("Error: Missing userId", { status: 400 });
	}

	try {
		// const hasheEmailAndSalt = await hash(userEmail, 12)
		const user = await UserModel.findOne({ email: userEmail });

		if (!user) {
			return new Response("Error: User not found", { status: 404 });
		}

		const userDiagnosis = await DiagnosissModel.findOne({
			userId: user?.id,
		});
		if (!userDiagnosis) {
			console.log("Analysis data is not found");
		}

		return new NextResponse(
			JSON.stringify({ userData: user, diagnosisData: userDiagnosis }),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (error) {
		console.error("Error updating post:", error);
		return new NextResponse(JSON.stringify({ error }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
