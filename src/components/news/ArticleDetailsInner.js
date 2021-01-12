import Image from "next/image";

function ArticleDetailsInner({
  article,
  siteUrl,
  articleLikeHandler,
  articleLiked,
}) {
  return (
    <div className="container">
      <h1 className="pb-3 lak">{article.title}</h1>
      <div className="float-end">
        <img
          className="img-fluid rounded-lg"
          src={article.image_url}
          alt={article.title}
          heigh="480px"
          width="640px"
        />
      </div>
      <div>
        <blockquote className="blockquote">
          <small>
            {"Posted on : " +
              article.published_at
                .replace("T", " ")
                .replace("Z", "")
                .substring(0, 19)}
          </small>
        </blockquote>
        <blockquote className="blockquote">
          <small>{"Posted By : " + article.published_by}</small>
        </blockquote>
        <div>
          <span className="mx-2">{article.views} Views</span>
          <span className="mx-2">{article.no_of_likes} Likes</span>
          <button
            className={`btn btn-primary${articleLiked ? " disabled" : ""} mx-2`}
            onClick={articleLikeHandler}
          >
            {articleLiked ? "Liked" : "Like"}
          </button>
        </div>
        <div className="btn-group pb-2">
          <a
            className="nav-link px-0"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://api.whatsapp.com/send?text=${article.title} ${siteUrl}/article/${article.id}`}
          >
            <Image
              src="/images/whatsapp.png"
              alt="Share on Whatsapp"
              className="img-fluid"
              height="50px"
              width="50px"
            />
          </a>

          <a
            className="nav-link px-0"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.facebook.com/sharer.php?u=${siteUrl}/article/${article.id}`}
          >
            <Image
              src="/images/facebook.png"
              alt="Share on Facebook"
              className="img-fluid"
              height="50px"
              width="50px"
            />
          </a>
        </div>
      </div>
      <h4 className="my-3 ram">{article.body}</h4>
    </div>
  );
}

export default ArticleDetailsInner;
