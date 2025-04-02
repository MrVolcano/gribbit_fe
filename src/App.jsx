import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ArticlePage from "./ArticlePage";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
