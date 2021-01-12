import { createContext } from "react";

export const initialState = {
  articles: [],
  errors: null,
  loading: false,
  article: null,
  articleLiked: false,
  getAllSuccess: false,
  getAllFailed: false,
  getOneSuccess: false,
  getOneFailed: false,
  theme: "dark",
};

export const stateContext = createContext(initialState);
