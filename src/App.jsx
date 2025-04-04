import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import ToastPopup from "./components/Toast";
import { useError } from "./Contexts/ErrorContext";

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
