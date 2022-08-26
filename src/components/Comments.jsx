import { useEffect, useState } from "react";
import { deleteComments, fetchCommentsByArticleId } from "../api";
import { useParams } from "react-router-dom";

export default function Comments({setCommentCount}) {
  const [comments, setcomments] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState("");

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

  const handleClick = (comment_id) => {
    return (event) => {
      setResponse("comment deleted!");
      return deleteComments(comment_id).then(() => {
        const filter = comments.filter((currComment) => currComment.comment_id !== comment_id)
        setcomments(filter)
        const commentSum = comments.length - 1; 
        setCommentCount(commentSum)
        return setTimeout(() => {
          setResponse("");
        }, 1000);
      });
    };
  };

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
            <>
              <p>{response}</p>
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
              <button key={comment.article_id} type="delete" onClick={handleClick(comment.comment_id)}>
                Delete Comment
              </button>
              <br/>
              <br />
            </>
          );
        })}
      </ul>
    </div>
  );
}
