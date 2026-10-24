import { IHeadLines } from "@/types/type";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
    let headlines: IHeadLines[] = [];

    try {
        const res = await fetch(
            "https://news-api-v2.vercel.app/api/news?limit=10",
            {
                signal: AbortSignal.timeout(10000),
            },
        );

        if (!res.ok) {
            throw new Error(`News API returned HTTP ${res.status}`);
        }

        const data = await res.json();
        if (!Array.isArray(data.data)) {
            throw new Error("News API returned invalid headlines");
        }

        headlines = data.data;
    } catch {
        // Ignore upstream fetch failures and render no marquee if unavailable.
    }

    if (headlines.length === 0) {
        return null;
    }

    return (
        <div className="bg-red-700 text-white">
            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-800 py-1 px-5 font-bold">সর্বশেষ</div>
                <MarqueeText
                    className="py-1"
                    direction="right"
                    duration={20}
                    pauseOnHover={true}
                    playOnlyInView={false}
                >
                    {headlines.map((h) => (
                        <span key={h.id}>
                            <span>{h.title}</span>
                            <span className="mx-5">•</span>
                        </span>
                    ))}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;
