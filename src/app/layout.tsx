import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import SesstionChecker from "@/lib/nextauth/SesstionChecker";
import NextAuthProvider from "@/lib/nextauth/nextauthProvider";
import ReduxProvider from "@/lib/redux/ReduxProvider";
// import Header from "./components/Header";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "WorkME",
	description: "「MBTI」と「スキル・志向性」によるAI適職診断",
	openGraph: {
		title: "WorkME",
		description: "「MBTI」と「スキル・志向性」によるAI適職診断",
		url: "https://tekishoku-sinndann.vercel.app",
		images: [
			{
				url: "/WM.png",
				width: 800,
				height: 600,
				alt: "WorkMEのロゴ",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "WorkME",
		description: "「MBTI」と「スキル・志向性」によるAI適職診断",
		images: ["/WM.png"],
	},
	icons: {
		icon: "favicon.ico", // 一般的なファビコン（favicon.ico）
		apple: "/WM.png", // Apple Touch Icon
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ReduxProvider>
					<NextAuthProvider>
						<SesstionChecker>
							{/* <Header /> */}
							{children}
						</SesstionChecker>
					</NextAuthProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
