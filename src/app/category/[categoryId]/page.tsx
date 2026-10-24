import NewsCard from "@/components/NewsCard";
import { ICategoryNews } from "@/types/type";

interface CategoryResponse {
    title: string;
    data: ICategoryNews[];
}

const isCategoryNews = (value: unknown): value is ICategoryNews => {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    return (
        "id" in value &&
        typeof value.id === "string" &&
        "title" in value &&
        typeof value.title === "string" &&
        "description" in value &&
        typeof value.description === "string" &&
        "category" in value &&
        typeof value.category === "string" &&
        "imageUrl" in value &&
        typeof value.imageUrl === "string" &&
        "imageAlt" in value &&
        typeof value.imageAlt === "string"
    );
};

const CategoryNewsPage = async ({
    params,
}: {
    params: Promise<{ categoryId: string }>;
}) => {
    const { categoryId } = await params;
    let data: CategoryResponse | null = null;
    let errorMessage: string | null = null;

    try {
        const res = await fetch(
            `https://news-api-v2.vercel.app/api/category/${categoryId}`,
            { signal: AbortSignal.timeout(10000) },
        );

        if (!res.ok) {
            throw new Error(`News API returned HTTP ${res.status}`);
        }

        const response: unknown = await res.json();
        if (
            typeof response !== "object" ||
            response === null ||
            !("title" in response) ||
            typeof response.title !== "string" ||
            !("data" in response) ||
            !Array.isArray(response.data) ||
            !response.data.every(isCategoryNews)
        ) {
            throw new Error("News API returned an invalid category response");
        }

        data = {
            title: response.title,
            data: response.data,
        };
    } catch {
        errorMessage = "This category is temporarily unavailable.";
    }

    if (errorMessage || !data) {
        return (
            <div className="m-10" role="alert">
                <h1 className="mb-4 border-b-2 border-red-700 p-2 text-2xl font-bold">
                    News unavailable
                </h1>
                <p>
                    {errorMessage ||
                        "We could not load this category right now. Please try again later."}
                </p>
            </div>
        );
    }

    return (
        <div className="m-10">
            <h1 className="text-2xl font-bold border-b-2 border-red-700 p-2 mb-4">
                {data.title}
            </h1>
            <div className="grid grid-cols-3 gap-10">
                {data.data.map((news) => (
                    <NewsCard news={news} key={news.id} />
                ))}
            </div>
        </div>
    );
};

export default CategoryNewsPage;
