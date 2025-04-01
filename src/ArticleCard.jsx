import Card from "react-bootstrap/Card";
import Votes from "./Votes";
import CommentsCount from "./CommentsCount";

export default function ArticleCard({ article }) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        variant="top"
        src={article.article_img_url}
        alt="Article image"
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        {/* <Card.Text>Body text here?</Card.Text> */}
        <div className="vote-comment-container">
          <Votes article={article} />
          <CommentsCount comment_count={article.comment_count} />
        </div>
      </Card.Body>
    </Card>
  );
}
