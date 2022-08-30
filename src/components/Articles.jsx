import React, { useEffect, useState } from "react";
import { fetchArticles, fetchSortByArticles } from "../api";
import { Link } from "react-router-dom";

export default function Articles({ articlesByTopic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    fetchArticles().then((res) => {
      if (articlesByTopic) {
        setArticles(articlesByTopic);
      } else {
        setArticles(res.articles);
      }
      setIsLoading(false);
    });
  }, []);

  const handleSort = (event) => {
    setIsLoading(true);
    setSortBy(event.target.value);
    fetchSortByArticles(event.target.value, order).then((res) => {
      setArticles(res.articles);
      setIsLoading(false);
    });
  };

  const handleOrder = (event) => {
    setIsLoading(true);
    setOrder(event.target.value);
    fetchSortByArticles(sortBy, event.target.value).then((res) => {
      setArticles(res.articles);
      setIsLoading(false);
    });
  };

  return (
    <div>
      {isLoading ? <p>Loading...</p> : ""}
      <h2>Articles :</h2>
      <div>
        <form>
          <label htmlFor="sort_by">Sort By: </label>
          <select
            onChange={handleSort}
            id="sort_by"
            type="search"
            value={sortBy}
            className="input-box"
          >
            <option value="created_at">Date</option>;
            <option value="votes">Votes</option>;
            <option value="comment_count">Comments</option>;
          </select>
          <label htmlFor="order">Order: </label>
          <select
            onChange={handleOrder}
            id="order"
            type="search"
            value={order}
            className="input-box"
          >
            <option value="desc">Decending</option>;
            <option value="asc">Ascending</option>;
          </select>
        </form>
      </div>
      <ul>
        {articles.map((article) => {
          let date = new Date(article.created_at);
          return (
            <Link
              className="link-articles"
              to={`num/${article.article_id}`}
              key={article.article_id}
            >
              <li key={article.article_id} className="cards">
                <h6 id="card">
                  {article.title}
                  <br />
                  Author : {article.author}
                  <br />
                  Topic : {article.topic}
                  <br />
                  {date.toDateString()} {date.toLocaleTimeString()}
                  <br />
                  <br />
                  <button type="display">votes - {article.votes}</button>
                  <br />
                  <button type="display">
                    Comments - {article.comment_count}
                  </button>
                </h6>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
