import { useState } from "react";
import { fetchSortByArticles } from "../api";

export default function ArticlesBySortOrder({ setArticles, setIsLoading }) {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  const handleSort = (event) => {
    setSortBy(event.target.value);
    fetchSortByArticles(event.target.value, order).then((res) => {
      if (res.msg === "Not Found") {
        setArticles(["bad"]);
      } else {
        setArticles(res.articles);
        setIsLoading(false);
      }
    });
  };

  const handleOrder = (event) => {
    setOrder(event.target.value);
    fetchSortByArticles(sortBy, event.target.value).then((res) => {
      if (res.msg === "Not Found") {
        setArticles(["bad"]);
      } else {
        setArticles(res.articles);
        setIsLoading(false);
      }
    });
  };

  // const handleChange = () => {
  //   fetchSortByArticles(sortBy, order).then((res) => {
  //     if (res.msg === "Not Found") {
  //       setArticles(["bad"]);
  //     } else {
  //       setArticles(res.articles);
  //       setIsLoading(false);
  //     }
  //   });
  // };

  return (
    <div>
      <form >
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
