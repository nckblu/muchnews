import './ArticleSources.scss';
import React from 'react';

export const ArticleSources = ({ sources }) => (
  <div className="ArticleSources">
	<ul className="ArticleSources__inner">
		{sources.map(source => (
			<li className="ArticleSources__inner__item" key={source.id}>{source.name}</li>
		))}
	</ul>
  </div>
  
); 

export default ArticleSources;
