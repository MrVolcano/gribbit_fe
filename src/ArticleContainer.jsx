import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Header from "./Header";
import { useEffect, useState } from "react";
import { fetchArticle } from "./apiFunctions";
import { useParams } from "react-router-dom";

export default function ArticleContainer() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState([true]);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState({});

  console.log("Passed Article_id:", article_id);

  // retrieve full article
  useEffect(() => {
    console.log("running useEffect block");
    setError(false);
    setIsLoading(true);
    fetchArticle(article_id)
      .then((articleData) => {
        console.log(articleData);
        setArticle(articleData);
      })
      .catch((error) => {
        console.error(`Error fetching article: ${article_id}`, error);
        setError(true);
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
      <Header />
      <Image src={article.article_img_url} fluid />
    </div>
  );
}
