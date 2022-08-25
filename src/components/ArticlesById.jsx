import { useEffect, useState } from "react";
import { fetchArticleById, patchVotes } from "../api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import ShowContents from "./Flip";


export default function ArticleById() {
  const [articleById, setArticleById] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchArticleById(id).then((res) => {
      setArticleById(res.article);
    });
  }, []);

  function handleVotes(votes, Id) {
    return () => {
      setArticleById(() => {
        const article = { ...articleById };
        article.votes = articleById.votes + votes;
        return article;
      });
      patchVotes(votes, Id).catch((err) => {
        setArticleById(() => articleById);
      });
    };
  }
  let date = new Date(articleById.created_at);
  return (

    <div>
      <h3>{articleById.title}</h3>
      <h4>By -- {articleById.author}</h4>
      <h5>Topic -- {articleById.topic}</h5>
      <h6>{date.toDateString()} {date.toLocaleTimeString()}</h6>
      <p>{articleById.body}</p>
      <button type="display">votes - {articleById.votes}</button>
      <button type="submit" onClick={handleVotes(1, articleById.article_id)}>
        <i className="fas fa-thumbs-up fa-2x" id="thumbs-up"></i>
      </button>
      <button type="submit" onClick={handleVotes(-1, articleById.article_id)}>
        <i className="fas fa-thumbs-down fa-2x" id="thumbs-down"></i>
      </button>
      <br />
      <br />
      <button type="display">comments - {articleById.comment_count}</button>
      <ShowContents><Comments/>Comments Hide Show</ShowContents>

    </div>
  );
}
