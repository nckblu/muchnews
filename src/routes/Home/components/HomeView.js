import React from 'react'
import Articles from '../../../components/Articles'
import { connect } from "react-redux";
import { Map } from "immutable";
import { 
  fetchPopular,
} from "actions/articles";

export class HomeView extends React.Component {
  
  static defaultProps = {
  	articles: [],
  }

  componentDidMount() {
  	this.props.fetchPopular(this.props.params.sort);	
  }

  componentDidUpdate() {
  	console.log('did update', this.props.articles);
  }

  render() {
  	let { articles } = this.props;
  	console.log('articles', articles)
  	return (
  		<Articles articles={articles}></Articles>
  	);
  }
}

const mapStateToProps = state => {
  return {
   	articles: state.articles.get("items"),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPopular: () => dispatch(fetchPopular()),	
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);