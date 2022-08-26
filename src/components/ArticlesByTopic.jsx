import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../api";

export default function ArticlesByTopic() {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useState(() => {
    fetchArticlesByTopic(slug).then((res) => {
      if (res.msg === "Not Found") {
        setArticlesByTopic(["bad"]);
      } else {
        setArticlesByTopic(res.articles);
        setIsLoading(false);
      }
    });
  });

  if (articlesByTopic[0] === "bad") {
    return (
      <>
        <h2>Something went wrong</h2>
        <h3>Please try again later!</h3>
      </>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Articles on {slug}</h2>
      <ul>
        {articlesByTopic.map((article) => {
          let date = Date(`${article.created_at}`);
          return (
            <li className="cards" key={article.article_id}>
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
      </ul>
    </div>
  );
}
