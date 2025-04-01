import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Header from "./Header";
import { useEffect, useState } from "react";
import { fetchArticle } from "./apiFunctions";
import { useParams } from "react-router-dom";
import AuthorAvatar from "./AuthorAvatar";
import Votes from "./Votes";
import CommentsCount from "./CommentsCount";

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
    <article className="article-container">
      <Header />
      {/* <Image src={article.article_img_url} rounded fluid /> */}
      <img src={article.article_img_url} className="image" />
      <h2>{article.title}</h2>

      <section style={{ padding: "1rem 0rem 1rem 0rem" }}>
        {article.body}
      </section>
      <div className="vote-comment-container">
        <Votes article={article} />
        <AuthorAvatar author={article.author} />
      </div>
    </article>
  );
}
