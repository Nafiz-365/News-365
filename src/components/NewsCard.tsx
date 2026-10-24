import { ICategoryNews } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }: { news: ICategoryNews }) => {
    return (
        <Link href={`/news/${news.id}`} className="group">
            <div className="card h-full bg-base-100 shadow-md transition-shadow duration-300 hover:shadow-xl">
                <figure className="overflow-hidden">
                    <Image
                        height={500}
                        width={500}
                        src={news.imageUrl}
                        alt={news.imageAlt || news.title}
                        className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </figure>

                <div className="card-body">
                    <span className="text-sm font-semibold text-red-600">
                        {news.category}
                    </span>

                    <h2 className="card-title line-clamp-2 font-bold group-hover:text-red-600">
                        {news.title}
                    </h2>

                    <p className="line-clamp-3 text-sm text-base-content/70">
                        {news.description}
                    </p>

                    <span className="mt-2 text-sm font-semibold text-red-600">
                        Read More →
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
