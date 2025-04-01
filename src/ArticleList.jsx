import { fetchAllArticles } from "./apiFunctions";
import ArticleCard from "./ArticleCard";
import FilterBar from "./FilterBar";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(false);
    setIsLoading(true);
    fetchAllArticles()
      .then((articlesFromApi) => {
        setArticles(articlesFromApi.articles);
        console.log(articlesFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setError(true);
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

  if (error) {
    return (
      <>
        <br />
        <p>Ooops! Something's croaked!</p>
      </>
    );
  }

  return (
    <div>
      <FilterBar />
      <p>Articles go here</p>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}
