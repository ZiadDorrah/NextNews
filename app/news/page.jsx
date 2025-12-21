import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function NewsPage() {
    return (
        <div id="news">
            <h1>News Page</h1>
            <ul className="news-list">
                {DUMMY_NEWS.map((news) => (
                    <li key={news.id}>
                        <Link href={`/news/${news.slug}`}>
                            <img src={`/images/news/${news.image}`} alt={news.title} />
                            <span>{news.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}