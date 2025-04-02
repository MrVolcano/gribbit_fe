import Card from "react-bootstrap/Card";
import Votes from "./Votes";
import CommentsCount from "./CommentsCount";
import AuthorAvatar from "./AuthorAvatar";
import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article }) {
  const navigate = useNavigate();

  function handleCardClick() {
    console.log("card clicked");
    navigate(`/articles/${article.article_id}`);
  }

  return (
    <Card className="bg-dark text-white" onClick={handleCardClick}>
      <Card.Img
        variant="top"
        src={article.article_img_url}
        alt="Article image"
      />
      <Card.Body>
        <div className="title-author-container">
          <Card.Title>{article.title}</Card.Title>
        </div>
        <AuthorAvatar author={article.author}></AuthorAvatar>
        <div className="vote-comment-container">
          <Votes article={article} />
          <CommentsCount comment_count={article.comment_count} />
        </div>
      </Card.Body>
    </Card>
  );
}
