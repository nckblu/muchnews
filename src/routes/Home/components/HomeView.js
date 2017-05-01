import React from 'react'
import Articles from '../../../components/Articles'
import ArticleSources from '../../../components/ArticleSources'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import _ from 'underscore'
import {
  fetchPopular
} from 'actions/articles'
import {
  fetchArticleSources,
  setActiveSource
} from 'actions/articleSources'

export class HomeView extends React.Component {

  static defaultProps = {
  	articles: [],
    articleSources: [],
    activeSource: null
  }

  componentDidMount () {
    this.props.fetchArticleSources()
  }

  componentWillReceiveProps (nextProps) {
    if ((!this.props.articleSources.length && nextProps.articleSources)
          || nextProps.params.sourceId != this.props.params.sourceId) {
      let activeSource = _.findWhere(nextProps.articleSources, { id: nextProps.params.sourceId ? parseInt(nextProps.params.sourceId, 10) : nextProps.articleSources[0].id })
      this.props.setActiveSource(activeSource)
      this.props.fetchPopular(activeSource.id)
    }
  }

  render () {
  	let { articles, articleSources } = this.props
    console.log('article sources', articleSources)
  	return (
    <div>
      <ArticleSources sources={articleSources} />
      <Articles articles={articles} />
    </div>
  	)
  }
}

const mapStateToProps = state => {
  return {
   	articles: state.articles.get('items'),
    articleSources: state.articleSources.get('sources', []),
    activeSource: state.articleSources.get('active')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPopular: (sourceId, sort) => dispatch(fetchPopular(sourceId, sort)),
    fetchArticleSources: () => dispatch(fetchArticleSources()),
    setActiveSource: (source) => dispatch(setActiveSource(source))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
