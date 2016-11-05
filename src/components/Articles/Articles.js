import React from 'react'
import { IndexLink, Link } from 'react-router'
import Article from '../Article';

export const Articles = ({ articles }) => (
  <div className="Articles">
    {articles.map((article, i) => (
    	<Article key={i} article={article}></Article>
    ))}
  </div>
); 

export default Articles;
