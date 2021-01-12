import Link from "next/link";

function TVCard({ article }) {
  return article ? (
    <div className={`card tv-card text-light px-0 m-2`}>
      <div className="card-body h-75">
        <h5 className="card-title ram">{article.title}</h5>
      </div>
      <Link href={"/articles/" + article.id}>
        <a className="card-footer btn text-light stretched-link">Open</a>
      </Link>
    </div>
  ) : null;
}

export default TVCard;
