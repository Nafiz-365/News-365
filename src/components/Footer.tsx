import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/NEWS 365 Global News Logo.png";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-700 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Main Footer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2"
                        >
                            <Image
                                src={logo}
                                width={45}
                                height={45}
                                alt="News-365 Logo"
                                className="h-20 w-20 object-contain"
                            />

                            <span className="text-2xl font-bold text-white">
                                News<span className="text-red-500">-365</span>
                            </span>
                        </Link>

                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            আপনার বিশ্বস্ত সংবাদমাধ্যম। দেশ ও বিশ্বের সর্বশেষ
                            খবর জানতে থাকুন News-365-এর সঙ্গে।
                        </p>
                    </div>

                    {/* Categories */}
                    <div>
                        <h2 className="mb-3 text-base font-semibold text-white">
                            সংবাদ বিভাগ
                        </h2>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/category/bangladesh"
                                    className="hover:text-red-400"
                                >
                                    বাংলাদেশ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/international"
                                    className="hover:text-red-400"
                                >
                                    আন্তর্জাতিক
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/politics"
                                    className="hover:text-red-400"
                                >
                                    রাজনীতি
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/sports"
                                    className="hover:text-red-400"
                                >
                                    খেলাধুলা
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/technology"
                                    className="hover:text-red-400"
                                >
                                    প্রযুক্তি
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="mb-3 text-base font-semibold text-white">
                            দ্রুত লিংক
                        </h2>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-red-400">
                                    হোম
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/bangladesh"
                                    className="hover:text-red-400"
                                >
                                    বাংলাদেশ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/international"
                                    className="hover:text-red-400"
                                >
                                    আন্তর্জাতিক
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/politics"
                                    className="hover:text-red-400"
                                >
                                    রাজনীতি
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-3 text-base font-semibold text-white">
                            আরও পড়ুন
                        </h2>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/category/sports"
                                    className="hover:text-red-400"
                                >
                                    খেলাধুলা
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/technology"
                                    className="hover:text-red-400"
                                >
                                    প্রযুক্তি
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Copyright */}
                <div className="mt-8 border-t border-gray-800 pt-4">
                    <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
                        <p>© {year} News-365. সর্বস্বত্ব সংরক্ষিত।</p>

                        <p>Always News, Always You</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
