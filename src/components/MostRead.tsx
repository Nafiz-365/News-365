import { IMostReadArticle } from "@/types/type";

const MostRead = async () => {
    let news: IMostReadArticle[] = [];
    let errorMessage: string | null = null;

    try {
        const res = await fetch(
            "https://news-api-v2.vercel.app/api/news/most-read",
            { signal: AbortSignal.timeout(10000) },
        );

        if (!res.ok) {
            throw new Error(`News API returned HTTP ${res.status}`);
        }

        const data = await res.json();
        news = Array.isArray(data?.data) ? data.data : [];
    } catch {
        errorMessage = "জনপ্রিয় সংবাদ লোড করতে সমস্যা হয়েছে।";
    }

    if (errorMessage) {
        return (
            <div className="card border border-red-200 bg-red-50 p-4 text-red-700">
                {errorMessage}
            </div>
        );
    }

    if (news.length === 0) {
        return (
            <div className="card border border-gray-200 bg-gray-50 p-4 text-gray-600">
                কোনো জনপ্রিয় সংবাদ পাওয়া যায়নি।
            </div>
        );
    }

    return (
        <div className="card p-4 bg-base-100 border border-gray-300">
            <h1 className="font-bold text-red-700 mb-4 border-b-2 border-red-900">
                {news[0].category}
            </h1>

            <div className="grid gap-4">
                {news.map((n, i) => (
                    <div key={n.id} className="flex gap-2 items-center">
                        <span className="text-2xl font-bold text-red-600">
                            {i + 1}
                        </span>
                        <h2>{n.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostRead;
