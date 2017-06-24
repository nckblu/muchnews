import React from "react";
import NewsViewSidebar from "./NewsViewSidebar";
import NewsViewArticles from "./NewsViewArticles";
import { browserHistory } from "react-router";

export class NewsView extends React.Component {
  static propTypes = {
    fetchArticleSources: React.PropTypes.func.isRequired,
    articleSources: React.PropTypes.array.isRequired,
    articles: React.PropTypes.array.isRequired,
  }

  componentDidMount() {
    if (!this.props.params.sourceId) {
      browserHistory.push("/news/1");
    }
    this.loadArticles(this.props.params.sourceId);
    this.props.fetchArticleSources();
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.sourceId !== prevProps.params.sourceId && this.props.params.sourceId) {
      this.loadArticles(this.props.params.sourceId);
    }
  }

  loadArticles(sourceId) {
    this.props.fetchArticlesBySource(sourceId);
  }

  render() {
    const {
      articleSources,
      articles,
    } = this.props;
    console.log("article sources is", articleSources)
    console.log("articles is", articles)
    return (
      <div className="NewsView">
        <div className="NewsView__newsViewSidebar">
          <NewsViewSidebar
            onSourceSelect={sourceId => this.handleSourceSelect(sourceId)}
            articleSources={articleSources}
          />
        </div>
        <div className="NewsView__newsViewArticles">
          <NewsViewArticles
            articles={articles}
          />
        </div>
      </div>
    );
  }

  handleSourceSelect(sourceId) {
    browserHistory.push(`/news/${sourceId}`);
  }
}

export default NewsView;

