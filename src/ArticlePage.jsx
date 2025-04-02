import Spinner from "react-bootstrap/Spinner";
import Header from "./Header";
import { useEffect, useState } from "react";
import { fetchArticle } from "./apiFunctions";
import { useParams } from "react-router-dom";
import AuthorAvatar from "./AuthorAvatar";
import Votes from "./Votes";
import CommentsCount from "./CommentsCount";
import CommentsComponent from "./CommentsComponent";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
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
      <article className="article-container">
        <Header />
        <img src={article.article_img_url} className="image" />
        <h1>{article.title}</h1>
        <AuthorAvatar author={article.author} />
        <section className="article-body">{article.body}</section>
        <div className="vote-comment-container">
          <Votes article={article} />
        </div>
        <CommentsComponent article_id={article.article_id}></CommentsComponent>
      </article>
    </div>
  );
}
