import { useContext, useEffect, useState } from "react";
import { stateContext } from "../../state/store";
import CarouselCmp from "../home/CarouselCmp";
import TVCard from "../home/TVCard";
import Banner from "../utils/Banner";
import { useGetArticles } from "../utils/customHooks";
import Spinner from "../utils/Spinner";

function HomeCmp() {
  const { state } = useContext(stateContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles([...state.articles]);
  }, [state.articles]);

  useGetArticles();
  return (
    <>
      {state.loading ? (
        <Spinner />
      ) : state.getAllFailed ? (
        <h1 className="text-danger text-center">
          {state.errors ? state.errors.message : "Error while fetching News"}
        </h1>
      ) : null}
      <div className="container">
        {state.articles && state.articles.length > 0 ? (
          <>
            <CarouselCmp articles={state.articles} />
            <h3 className="text-center mt-3">Top Viewed Articles</h3>
          </>
        ) : null}
        <div className="card-group my-2">
          {articles && articles.length > 0
            ? articles
                .sort((art1, art2) =>
                  art1.views > art2.views ? -1 : art1.views < art2.views ? 1 : 0
                )
                .slice(0, 4)
                .map((article) => <TVCard article={article} key={article.id} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default HomeCmp;
