import { INewsArticle } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

const MainNews = ({ news }: { news: INewsArticle[] }) => {
    const [firstNews, ...otherNews] = news;

    if (!firstNews) {
        return (
            <div className="rounded border border-gray-200 bg-gray-50 p-4 text-gray-600">
                কোনো সংবাদ পাওয়া যায়নি।
            </div>
        );
    }

    const date = firstNews.firstPublished
        ? new Date(firstNews.firstPublished).toLocaleDateString("bn-BD", {
              dateStyle: "full",
          })
        : "সর্বশেষ সংবাদ";

    return (
        <div className="flex gap-2">
            <Link href={`/news/${firstNews.id}`}>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <Image
                            height={500}
                            width={500}
                            src={firstNews.imageUrl}
                            alt={firstNews.imageAlt}
                        />
                    </figure>
                    <div className="card-body">
                        <span className="font-semibold text-red-700">
                            {firstNews.category}
                        </span>
                        <h2 className="card-title font-extrabold">
                            {firstNews.title}
                        </h2>
                        <p>{firstNews.description}</p>
                        <p className="text-sm text-gray-500">{date}</p>
                    </div>
                </div>
            </Link>
            <div className="grid gap-2">
                {otherNews.slice(0, 4).map((singleNews) => (
                    <Link href={`/news/${singleNews.id}`} key={singleNews.id}>
                        <div className="card border border-gray-200 py-5">
                            <div className="px-5">
                                <span className="font-semibold text-red-700">
                                    {singleNews.category}
                                </span>
                                <div className="font-extrabold">
                                    {singleNews.title}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MainNews;
