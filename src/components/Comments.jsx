import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../api";
import { useParams } from "react-router-dom";

export default function Comments() {
  const [comments, setcomments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCommentsByArticleId(id).then((res) => {
      setcomments(res.comments);
    });
  });

  return (
    <div>
      <ul>
        {comments.map((comment) => {
          let date = new Date(comment.created_at);
          return (
            <li className="cards" key={comment.comment_id}>
              <section id="card">
                {comment.body}
                <h4>By: {comment.author}</h4>
                {date.toDateString()} {date.toLocaleTimeString()}
                <br />
                <br />
                <button type="display">Likes: {comment.votes}</button>
              </section>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
