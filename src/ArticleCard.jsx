export default function ArticleCard({ article }) {
  console.log(article);
  return (
    <div>
      <img src={article.article_img_url}></img>
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <p>{article.topic}</p>
      <p>{article.created_at}</p>
      <p>{article.votes}</p>
    </div>
  );
}
