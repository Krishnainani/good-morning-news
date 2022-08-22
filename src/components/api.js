
export function fetchArticles () {
    return fetch(
        "https://good-morning-news-app.herokuapp.com/api/articles"
      ).then((res) => {
        return res.json();
      });
}