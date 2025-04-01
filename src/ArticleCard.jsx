import Card from "react-bootstrap/Card";
import Votes from "./Votes";
import CommentsCount from "./CommentsCount";

export default function ArticleCard({ article }) {
  // const handleVote = (increment) => {
  //   console.log(`Voted ${increment} for article ID: ${article.article_id}`);
  //   updateVotes(article.article_id, increment);
  // };

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
          <Votes article={article}/>
          <CommentsCount comment_count={article.comment_count}/>
        </div>
      </Card.Body>
    </Card>
  );
}
// <div>
//   <img src={article.article_img_url}></img>
//   <h2>{article.title}</h2>
//   <p>{article.author}</p>
//   <p>{article.topic}</p>
//   <p>{article.created_at}</p>
//   <p>{article.votes}</p>
// </div>

{
  /* <>
<Card>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>
<br />
<Card>
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Img variant="bottom" src="holder.js/100px180" />
</Card>
</> */
}
// import Card from 'react-bootstrap/Card';

// function ImgOverlayExample() {
//   return (
//     <Card className="bg-dark text-white">
//       <Card.Img src="holder.js/100px270" alt="Card image" />
//       <Card.ImgOverlay>
//         <Card.Title>Card title</Card.Title>
//         <Card.Text>
//           This is a wider card with supporting text below as a natural lead-in
//           to additional content. This content is a little bit longer.
//         </Card.Text>
//         <Card.Text>Last updated 3 mins ago</Card.Text>
//       </Card.ImgOverlay>
//     </Card>
//   );
// }

// export default ImgOverlayExample;
