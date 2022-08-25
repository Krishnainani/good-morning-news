import { useEffect, useState } from "react";
import { fetchUsers, postComments } from "../api";
import { useParams } from "react-router-dom";

export default function PostComments() {
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState([]);
  const [allUsers, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      console.log(users);
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
    event.preventDefault();
    postComments(name, body, id).then(({ comment }) => {
      setBody("");
      setName("")
      return setNewComment([comment]);
    });
  };

  return (
    <div>
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
        <label htmlFor="input-name">Name: </label>
        <select
          onChange={handleName}
          id="input-name"
          type="search"
          value={name}
          className="input-box"
        >
          {allUsers.map((user) => {
            return <option value={user.username}>{user.username}</option>;
          })}
        </select>
        <br />
        <button type="submit">submit</button>
      </form>
      <ul>
        {newComment.map((comment) => {
          let date = new Date(comment.created_at);
          return (
            <li className="cards">
              <p id="card">
                {comment.body}
                <h4>By: {comment.author}</h4>
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
