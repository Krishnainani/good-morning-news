
export function fetchArticles () {
    return fetch(
        "https://good-morning-news-app.herokuapp.com/api/articles"
      ).then((res) => {
        return res.json();
      })
}

export function fetchTopics () {
  return fetch(
      "https://good-morning-news-app.herokuapp.com/api/topics"
    ).then((res) => {
      return res.json();
    })
}

export function fetchArticlesByTopic (slug) {
  return fetch(
      `https://good-morning-news-app.herokuapp.com/api/articles?topic=${slug}`
    ).then((res) => {
      return res.json();
    })
}

export function fetchArticleById (Id) {
  return fetch(
      `https://good-morning-news-app.herokuapp.com/api/articles/${Id}`
    ).then((res) => {
      return res.json();
    })
}

export function patchVotes(votes, Id) {
  return fetch(
    `https://good-morning-news-app.herokuapp.com/api/articles/${Id}`,
    {
      method: "PATCH",
      body: JSON.stringify({"inc_votes": votes}),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if(res.ok === false){
      return Promise.reject({msg: "Invalid request" });
    }else{
    return res.json();
    }
  })
}