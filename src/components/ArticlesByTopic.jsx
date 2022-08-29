import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../api";
import Articles from "./Articles";
import HandleError from "./HandleError";

export default function ArticlesByTopic() {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useState(() => {
    fetchArticlesByTopic(slug)
      .then((res) => {
        setArticlesByTopic(res.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  });

  if (error) {
    return <HandleError error={error} />;
  } else {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h2>Articles on {slug}</h2>
        <Articles articlesByTopic={articlesByTopic} />
      </div>
    );
  }
}
