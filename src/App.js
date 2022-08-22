import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Description from "./components/Description";
import Header from "./components/Header";
import Nav from "./components/Nav";

const articleContext = createContext();

function App() {
  const [articles, setArticles] = useState([]);
  return (
      <articleContext.Provider value={{ articles, setArticles }}>
    <div className="App">
        <Header />
        <Description />
        {/* <Articles/> */}
        <Nav />
        <Routes>
          <Route path="/articles" element={<Articles/>} />
        </Routes>
    </div>
      </articleContext.Provider>
  );
}

export default App;
export { articleContext };
