import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ArticlePage from "./ArticlePage";
import ToastPopup from "./Toast"; 
import { useError } from "./Contexts/Error";

function App() {
  const { error } = useError(); 

  return (
    <div className="App">
      <ToastPopup />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;