import { useEffect, useState } from "react";
import {
  deleteComments,
  fetchCommentsByArticleId,
  fetchUsers,
  postComments,
} from "../api";
import { useParams } from "react-router-dom";

export default function Comments({ setCommentCount }) {
  const [comments, setcomments] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [deleteResponse, setDeleteResponse] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("tickle122");
  const [allUsers, setUsers] = useState([]);
  const [response, setResponse] = useState("");

  useEffect((id) => {
    fetchCommentsByArticleId(id).then((res) => {
      setcomments(res.comments);
      setIsLoading(false);
    });
    fetchUsers().then(({ users }) => {
      return setUsers(users);
    });
  }, []);

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    setResponse("Posted Comment Successful!");
    event.preventDefault();
    postComments(name, body, id).then((res) => {
      setcomments([...comments, res.comment]);
      const commentSum = comments.length + 1;
      setCommentCount(commentSum);
      setBody("");
      setName("tickle122");
      return setTimeout(() => {
        setResponse("");
      }, 1000);
    });
  };

  const handleClick = (comment_id) => {
    return (event) => {
      setDeleteResponse("comment deleted!");
      return deleteComments(comment_id).then(() => {
        const filter = comments.filter(
          (currComment) => currComment.comment_id !== comment_id
        );
        setcomments(filter);
        const commentSum = comments.length - 1;
        setCommentCount(commentSum);
        return setTimeout(() => {
          setDeleteResponse("");
        }, 1000);
      });
    };
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{response}</p>
      <br />
      <button type="display">Post Comment</button>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment-body">Comment: </label>
        <input
          onChange={handleBody}
          id="comment-body"
          type="search"
          value={body}
          className="input-box"
          required
        ></input>
        <br />
        <label htmlFor="input-name">Select User: </label>
        <select
          onChange={handleName}
          id="input-name"
          type="search"
          value={name}
          className="input-box"
          required
        >
          {allUsers.map((user) => {
            return (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
        <br />
        <button type="submit">submit</button>
      </form>
      <p>{deleteResponse}</p>
      <ul>
        {comments.map((comment) => {
          let date = new Date(comment.created_at);
          return (
            <>
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
              <button
                key={comment.article_id}
                type="delete"
                onClick={handleClick(comment.comment_id)}
              >
                Delete Comment
              </button>
              <br />
              <br />
            </>
          );
        })}
      </ul>
    </div>
  );
}
