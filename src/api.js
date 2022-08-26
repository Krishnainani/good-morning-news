export function fetchArticles() {
  return fetch("https://good-morning-news-app.herokuapp.com/api/articles").then(
    (res) => {
      return res.json();
    }
  );
}

export function fetchTopics() {
  return fetch("https://good-morning-news-app.herokuapp.com/api/topics").then(
    (res) => {
      return res.json();
    }
  );
}

export function fetchArticlesByTopic(slug) {
  return fetch(
    `https://good-morning-news-app.herokuapp.com/api/articles?topic=${slug}`
  ).then((res) => {
    return res.json();
  });
}

export function fetchArticleById(Id) {
  return fetch(
    `https://good-morning-news-app.herokuapp.com/api/articles/${Id}`
  ).then((res) => {
    return res.json();
  });
}

export function patchVotes(votes, Id) {
  return fetch(
    `https://good-morning-news-app.herokuapp.com/api/articles/${Id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ inc_votes: votes }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if (res.ok === false) {
      return Promise.reject({ msg: "Invalid request" });
    } else {
      return res.json();
    }
  });
}

export function fetchCommentsByArticleId(Id) {
  return fetch(
    `https://good-morning-news-app.herokuapp.com/api/articles/${Id}/comments`
  ).then((res) => {
    return res.json();
  });
}

export function postComments(username, body, Id) {
  return fetch(
    `https://good-morning-news-app.herokuapp.com/api/articles/${Id}/comments`,
    {
      method: "POST",
      body: JSON.stringify({ username: username, body: body }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    // if (res.ok === false) {
    //   return Promise.reject({ msg: "Invalid request" });
    // } else {
    return res.json();
    // }
  });
}

export function fetchUsers() {
  return fetch(`https://good-morning-news-app.herokuapp.com/api/users`).then(
    (res) => {
      return res.json();
    }
  );
}

export function fetchSortByArticles(sort, order) {
  console.log("api");
  return fetch(
    `https://good-morning-news-app.herokuapp.com/api/articles?sort_by=${sort}&order=${order}`
  ).then((res) => {
    return res.json();
  });
}

export function deleteComments(Id) {
  return fetch(
    `https://good-morning-news-app.herokuapp.com/api/comments/${Id}`,
    {
      method: "DELETE",
    }
  );
}
