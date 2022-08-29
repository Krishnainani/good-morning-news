// import { useState } from "react";


// export default function ArticlesBySortOrder({
//   setArticles,
//   setIsLoading,
//   isLoading,
// }) {
//   const [sortBy, setSortBy] = useState("created_at");
//   const [order, setOrder] = useState("desc");
//   const [loading, setLoading] = useState(true);

//   const handleSort = (event) => {
//     setSortBy(event.target.value);
//     setLoading(false);
//     fetchSortByArticles(event.target.value, order).then((res) => {
//       if (res.msg === "Not Found") {
//         setArticles(["bad"]);
//       } else {
//         setArticles(res.articles);
//         setIsLoading(false);
//       }
//     });
//   };

//   const handleOrder = (event) => {
//     setOrder(event.target.value);
//     setLoading(false);
//     fetchSortByArticles(sortBy, event.target.value).then((res) => {
//       if (res.msg === "Not Found") {
//         setArticles(["bad"]);
//       } else {
//         setArticles(res.articles);
//         setIsLoading(false);
//       }
//     });
//   };

//   // const handleChange = () => {
//   //   fetchSortByArticles(sortBy, order).then((res) => {
//   //     if (res.msg === "Not Found") {
//   //       setArticles(["bad"]);
//   //     } else {
//   //       setArticles(res.articles);
//   //       setIsLoading(false);
//   //     }
//   //   });
//   // };

//   return (
  
//   );
// }
