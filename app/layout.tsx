import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: {
		default:
			"Africa Retail Business | Africa's Premier Retail News Publication",
		template: "%s | Africa Retail Business",
	},
	description:
		"Africa Retail Business is Africa's definitive source for retail industry news, trends, market insights, and business intelligence across the continent.",
	keywords: [
		"Africa retail",
		"African business news",
		"retail industry Africa",
		"African market",
		"business intelligence Africa",
	],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://africaretailbusiness.com",
		siteName: "Africa Retail Business",
		title:
			"Africa Retail Business | Africa's Premier Retail News Publication",
		description:
			"Africa's definitive source for retail industry news, trends, and market insights.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Africa Retail Business",
		description:
			"Africa's definitive source for retail industry news and insights.",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
