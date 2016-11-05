import React from 'react';
import Articles from '../../../components/Articles';
import ArticleSources from '../../../components/ArticleSources';
import { connect } from "react-redux";
import { Map } from "immutable";
import { 
  fetchPopular,
} from "actions/articles";
import { 
  fetchArticleSources,
} from "actions/articleSources";

export class HomeView extends React.Component {
  
  static defaultProps = {
  	articles: [],
    articleSources: [],
  }

  componentDidMount() {
    this.props.fetchArticleSources();  
  	this.props.fetchPopular(this.props.params.sort);	
  }

  componentDidUpdate() {
  	console.log('did update', this.props.articles);
  }

  render() {
  	let { articles, articleSources } = this.props;
  	console.log('articles', articles);
    console.log('article sources', articleSources);
  	return (
      <div>
        <ArticleSources sources={articleSources}></ArticleSources>
    		<Articles articles={articles}></Articles>
      </div>
  	);
  }
}

const mapStateToProps = state => {
  return {
   	articles: state.articles.get("items"),
    articleSources: state.articleSources.get("sources"),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPopular: () => dispatch(fetchPopular()),
    fetchArticleSources: () => dispatch(fetchArticleSources()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);