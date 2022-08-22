import { useContext, useEffect } from "react";
import { articleContext } from "../App";
import { fetchArticles } from "./api";

export default function Articles() {
  const { articles, setArticles } = useContext(articleContext);

  useEffect(() => {
    fetchArticles().then((res) => {
      setArticles(res.articles);
    });
  }, []);

  return (
    <div>
      <h2>Articles :</h2>
      {articles.map((article) => {
        let date = Date(`${article.created_at}`);
        return (
          <li className="cards">
            <h6 id="card">
              Title : {article.title}
              <br />
              Author : {article.author}
              <br />
              Topic : {article.topic}
              <br />
              Created on : {date.toLocaleString()}
            </h6>
          </li>
        );
      })}
    </div>
  );
}
