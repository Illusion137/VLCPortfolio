import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const noyh = localFont({
	src: "../public/fonts/noyh-slim-semi-light.ttf",
	display: "swap",
	variable: "--font-noyh",
});

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: "Daniel Raygoza - Editor",
	description: "Film Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${noyh.variable}`}>
			<body>{children}</body>
		</html>
	);
}
