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

  constructor(props) {
    super(props);
    this.state = {
      switchingSource: true,
    };
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
      this.setState({ switchingSource: true }); //eslint-disable-line
    }
  }

  loadArticles(sourceId) {
    this.props.fetchArticlesBySource(sourceId)
      .then(() => this.setState({ switchingSource: false }));
  }

  render() {
    const {
      articleSources,
      articles,
      articlesWorking,
    } = this.props;
    const {
      switchingSource,
    } = this.state;
    console.log("article sources is", articleSources)
    console.log("articles is", articles)
    return (
      <div className="NewsView">
        <header className="NewsView__header">
          <h2 className="NewsView__header__h2">
          </h2>
        </header> 
        <div className="NewsView__newsViewSidebar">
          <NewsViewSidebar
            onSourceSelect={sourceId => this.handleSourceSelect(sourceId)}
            articleSources={articleSources}
          />
        </div>
        <div className="NewsView__newsViewArticles">
          <NewsViewArticles
            articles={articles}
            working={articlesWorking}
            switchingSource={switchingSource}
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

