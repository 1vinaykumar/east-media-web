import * as actionTypes from "./actionTypes";

const reducerHelper = (prevState, newState) => ({ ...prevState, ...newState });

export const reducer = (state, actions) => {
  switch (actions.type) {
    case actionTypes.GET_ARTICLES_LOADING:
      return reducerHelper(state, {
        loading: true,
        errors: null,
        getAllFailed: false,
        getAllSuccess: false,
      });

    case actionTypes.GET_ARTICLES_SUCCESS:
      return reducerHelper(state, {
        errors: null,
        getAllFailed: false,
        getAllSuccess: true,
        loading: false,
        articles: actions.payload.articles,
      });

    case actionTypes.GET_ARTICLES_ERROR:
      return reducerHelper(state, {
        errors: actions.payload.error,
        getAllFailed: true,
        getAllSuccess: false,
        loading: false,
      });

    case actionTypes.GET_ARTICLE_LOADING:
      return reducerHelper(state, {
        loading: true,
        errors: null,
        getOneFailed: false,
        getOneSuccess: false,
      });
    case actionTypes.GET_ARTICLE_SUCCESS:
      return reducerHelper(state, {
        errors: null,
        getOneFailed: false,
        getOneSuccess: true,
        loading: false,
        article: actions.payload.article,
      });
    case actionTypes.GET_ARTICLE_ERROR:
      return reducerHelper(state, {
        errors: actions.payload.error,
        getOneFailed: true,
        getOneSuccess: false,
        loading: false,
      });

    case actionTypes.VIEW_ARTICLE_SUCCESS:
      return reducerHelper(state, {
        errors: null,
        article: actions.payload.article,
        articles: state.articles.map((refArticle) =>
          refArticle.id === actions.payload.article.id
            ? actions.payload.article
            : refArticle
        ),
      });

    case actionTypes.VIEW_ARTICLE_ERROR:
      return reducerHelper(state, {
        errors: actions.payload.error,
      });

    case actionTypes.LIKE_ARTICLE_SUCCESS:
      return reducerHelper(state, {
        articles: state.articles.map((articleRef) =>
          articleRef.id === actions.payload.article.id
            ? actions.payload.article
            : articleRef
        ),
        article: actions.payload.article,
        errors: null,
      });
    case actionTypes.LIKE_ARTICLE_ERROR:
      return reducerHelper(state, {
        errors: actions.payload.error,
      });

    case actionTypes.CHANGE_THEME:
      return reducerHelper(state, {
        theme: state.theme === "dark" ? "light" : "dark",
      });

    case actionTypes.SET_INITIAL_STATE:
      return reducerHelper(state, actions.payload.state.articles);

    default:
      return state;
  }
};

export default reducer;
