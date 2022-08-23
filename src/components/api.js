
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
