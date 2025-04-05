import { fetchAllArticles } from "../utils/apiFunctions";
import ArticleCard from "./ArticleCard";
import FilterBar from "./FilterBar";
import { useState, useEffect } from "react";
import { useError } from "../Contexts/ErrorContext";
import CustomSpinner from "./CustomSpinner";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showError } = useError();

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles()
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
  }, []);

  if (isLoading) {
    return <CustomSpinner message={"Loading Articles..."} />;
  }

  return (
    <div>
      <FilterBar />
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}
