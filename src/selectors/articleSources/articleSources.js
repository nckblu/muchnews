import { createSelector } from "reselect";

export const articleSourcesSelector = createSelector(
  [state => state.articleSources.get("sources")],
  (articleSources, members) => {
    return articleSources.toJS();
  }
);

export default {
  articleSourcesSelector,
};
