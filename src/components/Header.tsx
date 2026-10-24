import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/NEWS 365 Global News Logo.png";
import NavLinks from "./NavLinks";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="w-full border-b border-gray-200 bg-white">
            {/* Main Header */}
            <div className="mx-auto max-w-7xl px-3 sm:px-4">
                <div className="flex items-center justify-between py-1.5">
                    {/* Logo + Brand */}
                    <Link href={"/"}>
                        <div className="flex min-w-0 items-center gap-2">
                            <Image
                                src={logo}
                                width={5000}
                                height={5000}
                                alt="News-365 Logo"
                                className="h-20 w-20 shrink-0 object-contain"
                                priority
                            />

                            <div className="min-w-0">
                                <h1 className="text-xl font-bold leading-none text-gray-900 sm:text-2xl">
                                    News
                                    <span className="text-red-600">-365</span>
                                </h1>

                                <p className="mt-0.5 text-[10px] leading-tight text-gray-500 sm:text-xs">
                                    Always News, Always You
                                </p>

                                <p className="mt-0.5 text-[10px] leading-tight text-gray-700 sm:text-xs">
                                    {date}
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Right Side */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="hidden md:block text-right">
                                <p className="text-xs text-gray-500">
                                    Latest News
                                </p>

                                <p className="text-sm font-semibold text-gray-800">
                                    Bangladesh & World
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none">
                                সাইন ইন
                            </button>

                            <button className="rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none">
                                সাইন আপ
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <NavLinks />
        </header>
    );
};

export default Header;
