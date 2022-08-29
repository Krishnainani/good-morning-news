// import { useContext, useEffect, useState } from "react";
// import { fetchCommentsByArticleId, fetchUsers, postComments } from "../api";
// import { useParams } from "react-router-dom";

// export default function PostComments({ setCommentCount }) {
//   const [body, setBody] = useState("");
//   const [name, setName] = useState("tickle122");
//   const [allUsers, setUsers] = useState([]);
//   const { id } = useParams();
//   const [response, setResponse] = useState("");
//   const [comments, setcomments] = useState([]);

//   useEffect(() => {
//     fetchUsers().then(({ users }) => {
//       return setUsers(users);
//     });
//     fetchCommentsByArticleId(id).then((res) => {
//       if (res.msg === "Not Found") {
//         setcomments(["bad"]);
//       } else {
//         setcomments(res.comments);
//       }
//     });
//   }, []);

//   const handleBody = (event) => {
//     setBody(event.target.value);
//   };

//   const handleName = (event) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     setResponse("Posted Comment Successful!");
//     event.preventDefault();
//     postComments(name, body, id).then(() => {
//       const commentSum = comments.length + 1;
//       setCommentCount(commentSum);
//       setBody("");
//       setName("tickle122");
//       setcomments(comments)
//       return setTimeout(() => {
//         setResponse("");
//       }, 3000);
//     });
//   };
//   return (
//     <div>
//       <p>{response}</p>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="comment-body">Comment: </label>
//         <input
//           onChange={handleBody}
//           id="comment-body"
//           type="search"
//           value={body}
//           className="input-box"
//           required
//         ></input>
//         <br />
//         <label htmlFor="input-name">Name: </label>
//         <select
//           onChange={handleName}
//           id="input-name"
//           type="search"
//           value={name}
//           className="input-box"
//         >
//           {allUsers.map((user) => {
//             return (
//               <option key={user.username} value={user.username}>
//                 {user.username}
//               </option>
//             );
//           })}
//         </select>
//         <br />
//         <button type="submit">submit</button>
//       </form>
//       <div></div>
//     </div>
//   );
// }
