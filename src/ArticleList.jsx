import { fetchAllArticles } from "./apiFunctions";
import ArticleCard from "./ArticleCard";
import FilterBar from "./FilterBar";
import { useState, useEffect } from "react";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchAllArticles()
      .then((articlesFromApi) => {
        setArticles(articlesFromApi.articles);
        console.log(articlesFromApi); // Log the loaded articles
      })
      .catch((error) => {
        console.error("Error fetching articles:", error); // Handle any errors
      });
  }, []); // Dependency array should be passed as the second argument
  return (
    <div>
      <FilterBar />
      <p>Articles go here</p>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} /> // Pass article props to ArticleCard
      ))}
    </div>
  );
}
