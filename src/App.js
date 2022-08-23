import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import ArticleById from "./components/ArticlesById";
import ArticlesByTopic from "./components/ArticlesByTopic";
import Description from "./components/Description";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topics from "./components/Topics";

// const articleContext = createContext();

function App() {
  // const [articles, setArticles] = useState([]);
  return (
    // <articleContext.Provider value={{ articles, setArticles }}>
    <div className="App">
      <Header />
      <Description />
      <Nav />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topic/:slug" element={<ArticlesByTopic />} />
        <Route path="articles/num/:id" element={<ArticleById />} />
      </Routes>
    </div>
    // </articleContext.Provider>
  );
}

export default App;
// export { articleContext };
