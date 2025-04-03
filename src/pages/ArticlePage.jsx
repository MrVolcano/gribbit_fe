import Spinner from "react-bootstrap/Spinner";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { fetchArticle } from "../utils/apiFunctions";
import { useParams } from "react-router-dom";
import AuthorAvatar from "../components/AuthorAvatar";
import Votes from "../components/Votes";
import CommentsComponent from "../components/CommentsComponent";
import { useError } from "../Contexts/Error";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const { showError } = useError();

  console.log("Passed Article_id:", article_id);

  useEffect(() => {
    console.log("running useEffect block");
    setIsLoading(true);
    fetchArticle(article_id)
      .then((articleData) => {
        console.log(articleData);
        setArticle(articleData);
      })
      .catch((error) => {
        console.error(`Error fetching article: ${article_id}`, error);
        showError(`Failed to load article: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article_id]);

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
      <article className="article-container">
        <Header />
        <img src={article.article_img_url} className="image" alt="" />
        <h1>{article.title}</h1>
        <AuthorAvatar author={article.author} />
        <section className="article-body">{article.body}</section>
        <div className="vote-comment-container">
          <Votes article={article} />
        </div>
        <CommentsComponent article_id={article.article_id} />
      </article>
    </div>
  );
}
