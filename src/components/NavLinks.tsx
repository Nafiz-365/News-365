import { INavLinks } from "@/types/type";
import Link from "next/link";
import React from "react";

const NavLinks = async () => {
    let navlinks: INavLinks[] = [];

    try {
        const res = await fetch(
            "https://news-api-v2.vercel.app/api/categories",
            {
                signal: AbortSignal.timeout(10000),
            },
        );

        if (!res.ok) {
            throw new Error(`News API returned HTTP ${res.status}`);
        }

        const data = await res.json();
        if (!Array.isArray(data.data)) {
            throw new Error("News API returned invalid categories");
        }

        navlinks = data.data;
    } catch {
        // Ignore upstream fetch failures and render an empty fallback state.
    }

    const filteredNavs = navlinks.filter((n) => n.scrapable === true);

    return (
        <div className="flex gap-5 justify-center my-2">
            <Link href={"/"}>হোম</Link>
            {filteredNavs.map((n, i) => (
                <Link key={i} href={`/category/${n.slug}`}>
                    {n.title}
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;
