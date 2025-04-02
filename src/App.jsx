import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ArticleContainer from "./ArticleContainer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<ArticleList />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticleContainer />} />
      </Routes>
    </div>
  );
}

export default App;
