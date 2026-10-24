import { INewsDetails } from "@/types/type";
import Image from "next/image";

const NewsDetailsPage = async ({
    params,
}: {
    params: Promise<{ newsId: string }>;
}) => {
    const { newsId } = await params;
    let article: Partial<INewsDetails> | null = null;
    let descriptionText = "";
    let errorMessage: string | null = null;

    try {
        const res = await fetch(
            `https://news-api-v2.vercel.app/api/article/${newsId}`,
            { signal: AbortSignal.timeout(10000) },
        );

        if (!res.ok) {
            throw new Error(`News API returned HTTP ${res.status}`);
        }

        const data = await res.json();
        article = data?.data ?? null;

        if (!article || typeof article !== "object") {
            throw new Error("News API returned an invalid article");
        }

        const descriptionBlocks = Array.isArray(article.description?.blocks)
            ? article.description.blocks
            : [];
        descriptionText =
            descriptionBlocks
                .flatMap((block) =>
                    Array.isArray(block?.model?.blocks)
                        ? block.model.blocks
                              .map((inner) => inner?.model?.text)
                              .filter(Boolean)
                        : [],
                )
                .join(" ") ||
            (typeof article.text === "string" ? article.text : "");
    } catch {
        errorMessage =
            "এই সংবাদটি এখনো পাওয়া যাচ্ছে না। অনুগ্রহ করে পরে আবার চেষ্টা করুন।";
    }

    if (errorMessage) {
        return (
            <div className="m-10 rounded border border-red-200 bg-red-50 p-6 text-red-700">
                {errorMessage}
            </div>
        );
    }

    return (
        <div className="mx-auto my-10 max-w-5xl space-y-6 px-4">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                {article?.title || "News article"}
            </h1>

            {descriptionText ? (
                <p className="text-lg leading-8 text-gray-600">
                    {descriptionText}
                </p>
            ) : null}

            {typeof article?.imageUrl === "string" && article.imageUrl ? (
                <Image
                    src={article.imageUrl}
                    alt={article.title || "News article"}
                    width={500}
                    height={300}
                    className="h-auto w-full rounded-xl object-cover shadow-md"
                />
            ) : null}

            {typeof article?.text === "string" && article.text ? (
                <p className="text-base leading-8 text-gray-700">
                    {article.text}
                </p>
            ) : null}
        </div>
    );
};

export default NewsDetailsPage;
