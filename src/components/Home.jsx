import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { fetchArticles } from "../api";

export default function Home() {
  const [mostVoted, setMostVoted] = useState({});
  const [mostCommented, setMostCommented] = useState({});

  useEffect(() => {
    fetchArticles().then((res) => {
      const mostVotedArticle = res.articles.reduce((prev, curr) => {
        return prev.votes > curr.votes ? prev : curr;
      });
      const mostCommentedArticle = res.articles.reduce((prev, curr) => {
        return parseInt(prev.comment_count) > parseInt(curr.comment_count)
          ? prev
          : curr;
      });
      setMostVoted(mostVotedArticle);
      setMostCommented(mostCommentedArticle);
    });
  });
  let dateForVoted = new Date(mostVoted.created_at);
  let dateForCommented = new Date(mostVoted.created_at);
  return (
    <div>
      <h2>Featured</h2>
      <h3>Vote-Winning Article</h3>
      <Link
        className="link-articles"
        to={`articles/num/${mostVoted.article_id}`}
      >
        <li className="cards">
          <h6 id="card">
            {mostVoted.title}
            <br />
            Author : {mostVoted.author}
            <br />
            Topic : {mostVoted.topic}
            <br />
            {dateForVoted.toDateString()} {dateForVoted.toLocaleTimeString()}
            <br />
            <br />
            <button type="display">votes - {mostVoted.votes}</button>
            <br />
            <button type="display">Comments - {mostVoted.comment_count}</button>
          </h6>
        </li>
      </Link>
      <h3>Most Commented Article</h3>
      <Link
        className="link-articles"
        to={`articles/num/${mostCommented.article_id}`}
      >
        <li className="cards">
          <h6 id="card">
            {mostCommented.title}
            <br />
            Author : {mostCommented.author}
            <br />
            Topic : {mostCommented.topic}
            <br />
            {dateForCommented.toDateString()}{" "}
            {dateForCommented.toLocaleTimeString()}
            <br />
            <br />
            <button type="display">votes - {mostCommented.votes}</button>
            <br />
            <button type="display">
              Comments - {mostCommented.comment_count}
            </button>
          </h6>
        </li>
      </Link>
    </div>
  );
}
