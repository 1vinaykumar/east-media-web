import * as actionTypes from "./actionTypes";

const action = (type, payload = {}) => {
  return {
    type,
    payload,
  };
};

export const setInitialState = (state) =>
  action(actionTypes.SET_INITIAL_STATE, { state });

//-------------------------------------------------------------------------------
//Get All Artcles Operations

export const getArticlesLoading = () =>
  action(actionTypes.GET_ARTICLES_LOADING);

export const getArticlesSuccess = (articles) =>
  action(actionTypes.GET_ARTICLES_SUCCESS, { articles });

export const getArticlesError = (error) =>
  action(actionTypes.GET_ARTICLES_ERROR, { error });

//--------------------------------------------------------------------------------
//Get A single article from above articles

export const getArticleLoading = () => action(actionTypes.GET_ARTICLE_LOADING);

export const getArticleSuccess = (article) =>
  action(actionTypes.GET_ARTICLE_SUCCESS, { article });

export const getArticleError = (error) =>
  action(actionTypes.GET_ARTICLE_ERROR, { error });

//--------------------------------------------------------------------------------
//Article liking

export const likeArticleLoading = () =>
  action(actionTypes.LIKE_ARTICLE_LOADING);

export const likeArticleSuccess = (article) =>
  action(actionTypes.LIKE_ARTICLE_SUCCESS, { article });

export const likeArticleError = (error) =>
  action(actionTypes.LIKE_ARTICLE_ERROR, { error });

//--------------------------------------------------------------------------------
//Article Viewing

export const viewArticleLoading = () =>
  action(actionTypes.VIEW_ARTICLE_LOADING);

export const viewArticleSuccess = (article) =>
  action(actionTypes.VIEW_ARTICLE_SUCCESS, { article });

export const viewArticleError = (error) =>
  action(actionTypes.VIEW_ARTICLE_ERROR, { error });

export const changeTheme = () => action(actionTypes.CHANGE_THEME);
