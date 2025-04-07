import { fetchArticles } from "../utils/apiFunctions";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { useError } from "../Contexts/ErrorContext";
import CustomSpinner from "./CustomSpinner";
import { useParams } from "react-router-dom";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showError } = useError();
  const { topic } = useParams();

  console.log("Passed Topic:", topic);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi.articles);
        console.log(articlesFromApi);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        showError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) {
    return <CustomSpinner message={"Loading Articles..."} />;
  }

  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}
