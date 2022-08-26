import { useState } from "react";
import { fetchSortByArticles } from "../api";

export default function ArticlesBySortOrder({ setArticles, setIsLoading }) {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  const handleSort = (event) => {
    event.preventDefault();
    setSortBy(event.target.value);
  };

  const handleOrder = (event) => {
    event.preventDefault();
    setOrder(event.target.value);
  };

  const handleSubmit = () => {
    fetchSortByArticles(sortBy, order).then((res) => {
      if (res.msg === "Not Found") {
        setArticles(["bad"]);
      } else {
        setArticles(res.articles);
        setIsLoading(false);
      }
    });
  };

  return (
    <div>
      <form onClick={handleSubmit}>
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
  );
}
