import React from 'react'
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
  	console.log('did mount')
  	this.props.fetchPopular();	
  }

  componentDidUpdate() {
  	console.log('did update', this.props.articles);
  }

  render() {
  	let { articles } = this.props;
  	console.log('articles', articles)
  	return (
  		<div>
  		Articles here
	  		{articles.map((article, i) => {
	  			return (
	  				<li key={i}>{article.title}</li>
	  			)
	  		})}
  		</div>
  	);
  }
}

const mapStateToProps = state => {
	console.log('state', state.articles.toJS())
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