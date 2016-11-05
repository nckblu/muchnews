import React from 'react'
import Article from '../Article';
import './Articles.scss';

export const Articles = ({ articles }) => (
  <div className="Row">
	<div className="Articles">
		{articles.map((article, i) => (
			<Article key={i} article={article}></Article>
		))}
	</div>
  </div>
  
); 

export default Articles;
