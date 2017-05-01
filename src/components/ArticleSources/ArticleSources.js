import './ArticleSources.scss'
import React from 'react'
import { Link } from 'react-router'

export const ArticleSources = ({ sources }) => (
  <div className='ArticleSources'>
    <ul className='ArticleSources__inner'>
      {sources.map(source => (
        <li className='ArticleSources__inner__item' key={source.id}>
          <Link className='ArticleSources__inner__item__link' to={`/news/${source.id}`}>{source.name}</Link>
        </li>
		))}
    </ul>
  </div>

)

export default ArticleSources
