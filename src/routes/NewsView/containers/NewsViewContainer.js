import { connect } from "react-redux";
import NewsView from "../components/NewsView";
import articleSourcesActions from "actions/articleSources";
import articleSourcesSelectors from "selectors/articleSources";
import articlesActions from "actions/articles";
import articlesSelectors from "selectors/articles";

const mapStateToProps = state => {
  return {
    articleSources: articleSourcesSelectors.articleSourcesSelector(state),
    articles: articlesSelectors.articlesSelector(state),
    articlesWorking: articlesSelectors.articlesWorkingSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticleSources: () => dispatch(articleSourcesActions.fetchArticleSources()),
    fetchArticlesBySource: sourceId => dispatch(articlesActions.fetchArticlesBySource(sourceId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsView);

