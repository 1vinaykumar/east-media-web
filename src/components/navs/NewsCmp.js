import { useContext } from "react";
import { stateContext } from "../../state/store";
import ArticleTemplate from "../news/ArticleTemplate";
import { useGetArticles } from "../utils/customHooks";
import Spinner from "../utils/Spinner";

function NewsCmp() {
  const { state } = useContext(stateContext);
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
        <div className="row justify-content-center">
          {state.articles
            ? state.articles.map((article) => (
                <ArticleTemplate
                  article={article}
                  theme={state.theme}
                  key={article.id}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default NewsCmp;
