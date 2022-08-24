import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((res) => {
      if (res.msg === "Not Found") {
        setArticles(["bad"]);
      } else {
        setArticles(res.articles);
        setIsLoading(false);
      }
    });
  }, []);

  if (articles[0] === "bad") {
    return (
      <>
        <h2>Something went wrong</h2>
        <h3>Please try again later!</h3>
      </>
    );
  } else if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Articles :</h2>
      <ul>
        {articles.map((article) => {
           let date = new Date(article.created_at);
          return (
            <Link className="link-articles" to={`num/${article.article_id}`}>
              <li className="cards">
                <h6 id="card">
                  {article.title}
                  <br />
                  Author : {article.author}
                  <br />
                  Topic : {article.topic}
                  <br />
                  {date.toDateString()} {date.toLocaleTimeString()}
                </h6>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
