import { fetchAllArticles } from "./apiFunctions";
import ArticleCard from "./ArticleCard";
import FilterBar from "./FilterBar";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useError } from "./Contexts/Error";

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
    return (
      <>
        <br />
        <p>Loading</p>
        <Spinner />
      </>
    );
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
