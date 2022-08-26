import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../api";
import Articles from "./Articles";

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
      <Articles articlesByTopic={articlesByTopic}/>
    </div>
  );
}
