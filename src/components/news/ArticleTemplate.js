import Link from "next/link";

function ArticleTemplate({ article, theme }) {
  return (
    <div className="at-card col-10 col-sm-5 col-md-4 col-lg-3 my-2">
      <div className={`card bg-${theme} a-card mx-xl-2`}>
        <img
          className="card-img-top h-50"
          src={article.image_url}
          alt={article.title.substring(0, 40)}
          height="160px"
        />
        <div className="card-body text-center h-25">
          <h6 className="card-title text-wrap ram">
            {`${article.title.substring(0, 70)}${
              article.title.length > 70 ? "......" : ""
            }`}
          </h6>
        </div>
        <div className="card-footer h-25">
          <p className="card-text text-center">
            Date : {article.published_at.split("T")[0]}
          </p>
          <p className="card-text row">
            <small className="text-muted">
              <label className="col-6 text-center">
                {article.no_of_likes} Likes
              </label>
              <label className="col-6 text-center">{article.views} Views</label>
            </small>
          </p>
          <Link href={"/articles/" + article.id}>
            <a className="stretched-link m-0 p-0"></a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleTemplate;
