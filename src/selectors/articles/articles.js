import { createSelector } from "reselect";

export const articlesSelector = createSelector(
  [state => state.articles.get("items")],
  (articles, members) => {
    return articles.toJS();
  }
);

export default {
  articlesSelector,
};
