import ArticleDetailsInner from "./ArticleDetailsInner";
import ArticleDetailsHead from "./ArticleDetailsHead";
import { useGetArticle, useViewArticle } from "../utils/customHooks";
import { useContext, useState, useEffect } from "react";
import { stateContext } from "../../state/store";
import { likeArticleSuccess, likeArticleError } from "../../state/actions";
import axios from "axios";

const siteUrl = "https://eastmedia.vercel.app";

function ArticleDetails({ articleData, id }) {
  const { state, dispatch } = useContext(stateContext);
  const [article, setArticle] = useState(articleData);
  const [articleLiked, setarticleLiked] = useState(false);

  useViewArticle(article);
  useGetArticle(id);

  useEffect(() => {
    if (state.article) setArticle(state.article);
  }, [article, state.article]);

  useEffect(() => {
    if (article.liked) {
      localStorage.setItem("articleLiked" + article.id, true);
      setarticleLiked(true);
    }
  }, [article]);

  const articleLikeHandler = () => {
    if (!articleLiked && !article.liked) {
      axios
        .put(
          "https://vinaykumar13.pythonanywhere.com/api/reach/" + article.id,
          {
            no_of_likes: article.no_of_likes + 1,
          }
        )
        .then((response) => {
          dispatch(
            likeArticleSuccess({
              ...article,
              no_of_likes: response.data.no_of_likes,
              liked: true,
            })
          );
          setarticleLiked(true);
        })
        .catch((error) => {
          dispatch(likeArticleError(error));
          setarticleLiked(false);
        });
    }
  };

  return article || state.getOneSuccess ? (
    <>
      <ArticleDetailsHead
        article={article}
        siteName="EastMedia"
        siteUrl={siteUrl}
      />
      <ArticleDetailsInner
        article={article}
        siteUrl={siteUrl}
        articleLikeHandler={articleLikeHandler}
        articleLiked={articleLiked}
      />
    </>
  ) : state.getOneLoading ? (
    <h1>Loading...</h1>
  ) : state.getOneFailed ? (
    <h1>SOmething wrong</h1>
  ) : (
    <h2>Something went wrong</h2>
  );
}

export default ArticleDetails;
