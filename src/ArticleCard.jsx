import Card from "react-bootstrap/Card";
import Votes from "./Votes";
import CommentsCount from "./CommentsCount";
import { RxAvatar } from "react-icons/rx";
import Badge from "react-bootstrap/Badge";
import AuthorAvatar from "./AuthorAvatar";

export default function ArticleCard({ article }) {
  return (
    <Card className="bg-dark text-white">
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
