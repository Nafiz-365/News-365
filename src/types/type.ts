/* Types for the news application */

export interface INewsArticle {
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
}

/* News shown on category pages */
export interface ICategoryNews {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

/* Latest news shown in the marquee */
export interface IHeadLines {
    id: string;
    title: string;
}

/* Most-read news articles */
export interface IMostReadArticle {
    id: string;
    title: string;
    category: string;
}

/* Navigation links for news categories */
export interface INavLinks {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

// News details page
export interface INewsDetails {
    id: string;
    title: string;
    description: {
        blocks: {
            model: {
                text: string;
                blocks: {
                    model: {
                        text: string;
                    };
                }[];
            };
        }[];
    };
    imageUrl: string;
    text: string;
}
