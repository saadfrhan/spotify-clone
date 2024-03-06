import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import SupabaseProvider from "@/providers/supabase";
import UserProvider from "@/providers/user";
import ModalProvider from "@/providers/modal";
import ToasterProvider from "@/providers/toast";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spotify Clone",
	description: "Listen to music!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={figtree.className}>
				<ToasterProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<Sidebar>
							{children}
						</Sidebar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
