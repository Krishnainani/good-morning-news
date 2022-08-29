import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddressNotFound from "./components/AddressNotFound";
import Articles from "./components/Articles";
import ArticleById from "./components/ArticlesById";
import ArticlesByTopic from "./components/ArticlesByTopic";
import Description from "./components/Description";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topics from "./components/Topics";

// const CommentContext = createContext();

function App() {
  // const [comments, setcomments] = useState([]);
  return (
    // <CommentContext.Provider value={{ comments, setcomments }}>
      <div className="App">
        <Header />
        <Description />
        <Nav />
        <Routes>
          <Route path="/*" element={<AddressNotFound />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topic/:slug" element={<ArticlesByTopic />} />
          <Route path="articles/num/:id" element={<ArticleById />} />
          <Route path="/topic/:slug/num/:id" element={<ArticleById />} />
        </Routes>
      </div>
    // </CommentContext.Provider>
  );
}

export default App;

