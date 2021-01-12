import { useState, useEffect } from "react";
import Link from "next/link";

function CarouselCmp({ articles }) {
  const [activeIndex, setactiveIndex] = useState(0);
  const [animation, setAnimation] = useState("next");

  useEffect(() => {
    const intervel = setInterval(() => {
      if (animation === "prev") setAnimation("next");
      setactiveIndex((prev) => (prev < articles.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(intervel);
  });

  const nextButtonHandler = () => {
    setactiveIndex((prev) => (prev < articles.length - 1 ? prev + 1 : 0));
    setAnimation("next");
  };

  const prevButtonHandler = () => {
    setactiveIndex((prev) => (prev > 0 ? prev - 1 : articles.length - 1));
    setAnimation("prev");
  };
  return (
    <>
      <div className="carousel">
        <ol className="carousel-indicators">
          {articles.slice(0, 10).map((val, index) => (
            <li
              key={val.id}
              className={index === activeIndex % 10 ? "active" : ""}
              onClick={() =>
                setactiveIndex((prev) => Math.floor(prev / 10) * 10 + index)
              }
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              } ${animation}`}
            >
              <img
                src={article.image_url}
                className="rounded d-block w-100 c-img"
                alt={article.title}
                height="320px"
              />
              <div className="carousel-caption">
                <h5 className="mx-auto px-3 pt-2 pb-1 lak c-cap">
                  {article.title}
                </h5>
              </div>
              <Link href={"/articles/" + article.id}>
                <a className="stretched-link m-0 p-0"></a>
              </Link>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          onClick={prevButtonHandler}
          role="button"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          onClick={nextButtonHandler}
          role="button"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </>
  );
}

export default CarouselCmp;
