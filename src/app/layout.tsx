import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/floating-whatsapp";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-poppins",
});

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-open-sans",
});

export const metadata: Metadata = {
	title: "HRZ Logistics - Warehousing & Distribution",
	description:
		"HRZ Logistics provides end-to-end warehousing and distribution solutions across 50+ countries. Storage, logistics, cargo, trucking, and packaging services.",
	icons: {
		icon: "/favicon-32x32.png",
		apple: "/apple-touch-icon.png",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						<main className="pt-18">{children}</main>
						<Footer />
						<FloatingWhatsAppButton />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
