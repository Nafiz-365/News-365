import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

const notoSerifBangali = Noto_Serif_Bengali({
    variable: "--font-geist-sans",
    subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
    title: "News-365",
    description: "Bangladesh and world news coverage from News-365.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            data-theme="light"
            className={`${notoSerifBangali.className} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Header />
                <Marquee />
                <main className="max-w-7xl mx-auto">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
