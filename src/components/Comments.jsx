import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../api";
import { useParams } from "react-router-dom";

export default function Comments() {
  const [comments, setcomments] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByArticleId(id).then((res) => {
      if (res.msg === "Not Found") {
        setcomments(["bad"]);
      } else {
        setcomments(res.comments);
        setIsLoading(false);
      }
    });
  }, []);

  if (comments[0] === "bad") {
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
