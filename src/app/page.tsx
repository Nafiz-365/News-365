import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";
import { INewsArticle } from "@/types/type";

interface IOtherSection {
    curationId: string;
    title: string;
    articles: {
        id: string;
        title: string;
        description: string;
        link: string;
        imageUrl: string;
        imageAlt: string;
        category: string;
        type: string;
        isLive: boolean;
        firstPublished: string | null;
        lastPublished: string | null;
        source: string;
    }[];
}

export default async function Home() {
    let sections: Array<{ articles?: unknown[] }> = [];
    let errorMessage: string | null = null;

    try {
        const res = await fetch(
            "https://news-api-v2.vercel.app/api/news/sections",
            {
                signal: AbortSignal.timeout(10000),
            },
        );

        if (!res.ok) {
            throw new Error(`News API returned HTTP ${res.status}`);
        }

        const data = await res.json();
        sections = Array.isArray(data?.data) ? data.data : [];
    } catch {
        errorMessage =
            "সাম্প্রতিক সংবাদ লোড করতে সমস্যা হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।";
    }

    if (errorMessage) {
        return (
            <div className="m-10 rounded border border-red-200 bg-red-50 p-6 text-red-700">
                {errorMessage}
            </div>
        );
    }

    if (sections.length === 0) {
        return (
            <div className="m-10 rounded border border-gray-200 bg-gray-50 p-6 text-gray-600">
                কোনো সংবাদ পাওয়া যায়নি।
            </div>
        );
    }

    const mainNews: INewsArticle[] = Array.isArray(sections[0]?.articles)
        ? (sections[0].articles as INewsArticle[])
        : [];
    const otherSections: IOtherSection[] = (
        sections.slice(1) as Partial<IOtherSection>[]
    )
        .map((section) => ({
            curationId:
                typeof section.curationId === "string"
                    ? section.curationId
                    : "",
            title: typeof section.title === "string" ? section.title : "",
            articles: Array.isArray(section.articles)
                ? (section.articles as IOtherSection["articles"])
                : [],
        }))
        .filter(
            (section): section is IOtherSection =>
                Boolean(section.title) && section.articles.length > 0,
        );

    return (
        <div>
            <div className="grid gap-4 grid-cols-3 m-10">
                <div className="col-span-2 p-2">
                    <MainNews news={mainNews} />

                    <div className="grid gap-5 mt-5">
                        {otherSections.map((otherSection) => (
                            <div
                                className=""
                                key={
                                    otherSection.curationId ||
                                    otherSection.title
                                }
                            >
                                <h1 className="font-bold border-b-2 border-red-700 pb-1">
                                    {otherSection.title}
                                </h1>
                                <div className="grid grid-cols-3 gap-2 mt-4">
                                    {otherSection.articles.map((news) => (
                                        <NewsCard news={news} key={news.id} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-1 p-2">
                    <MostRead />
                </div>
            </div>
        </div>
    );
}
