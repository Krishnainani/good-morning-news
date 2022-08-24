import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../api";

export default function Comments() {
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticleId(1).then((res) => {
      setcomments(res.comments);
    });
  });

  return (
    <div>
      <ul>
        {comments.map((comment) => {
          let date = new Date(comment.created_at);
          return (
            <li className="cards">
              <p id="card">
                {comment.body}
                <br />
                <br />
                By: {comment.author}
                <br />
                <br />
               {date.toDateString()} {date.toLocaleTimeString()}
                <br />
                <br />
                <button type="display">Likes: {comment.votes}</button>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
