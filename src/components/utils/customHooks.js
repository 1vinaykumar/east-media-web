import { useContext, useEffect } from "react";
import axios from "axios";
import * as actions from "../../state/actions";
import { stateContext } from "../../state/store";

const urlPrefix = "https://vinaykumar13.pythonanywhere.com";

export const useGetArticles = () => {
  const { dispatch } = useContext(stateContext);

  useEffect(() => {
    dispatch(actions.getArticlesLoading());
    axios
      .get(urlPrefix + "/api/articles")
      .then((response) => {
        dispatch(actions.getArticlesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(actions.getArticlesError(error));
      });
  }, []);
};

export const useGetArticle = (id) => {
  const { state, dispatch } = useContext(stateContext);

  useEffect(() => {
    dispatch(actions.getArticleLoading());
    const articleInLocal = state.articles.find((article) => article.id === id);
    if (articleInLocal) {
      dispatch(actions.getArticleSuccess(articleInLocal));
    } else {
      axios
        .get(urlPrefix + "/api/articles/" + id)
        .then((response) => {
          dispatch(actions.getArticleSuccess(response.data));
        })
        .catch((error) => {
          dispatch(actions.getArticleError(error));
        });
    }
  }, []);
};

export const useViewArticle = (article) => {
  const { dispatch } = useContext(stateContext);
  if (!article.articleViewed) {
    axios
      .put(urlPrefix + "/api/reach/" + article.id, {
        views: article.views + 1,
      })
      .then((response) => {
        dispatch(
          actions.viewArticleSuccess({
            ...article,
            views: response.data.views,
            articleViewed: true,
          })
        );
      })
      .catch((error) => {
        dispatch(actions.viewArticleError(error));
      });
  }
};
