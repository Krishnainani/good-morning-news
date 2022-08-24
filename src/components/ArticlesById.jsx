import { useEffect, useState } from "react";
import { fetchArticleById } from "../api";
import { useParams } from "react-router-dom";

export default function ArticleById() {
  const [articleById, setArticleById] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchArticleById(id).then((res) => {
      setArticleById(res.article);
    });
  }, []);

  let date = Date(`${articleById.created_at}`);

  return (
    <div>
      <h3>{articleById.title}</h3>
      <h4>By -- {articleById.author}</h4>
      <h5>Topic -- {articleById.topic}</h5>
      <h6>{date.toLocaleString()}</h6>
      <p>{articleById.body}</p>
      <button type="display">votes - {articleById.votes}</button>
      <button type="display">comments - {articleById.comment_count}</button>
    </div>
  );
}
