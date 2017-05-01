import React from 'react'
import { IndexLink, Link } from 'react-router'
import '../../styles/core.scss'
import './Article.scss'

export const Article = ({ article }) => (
  <a href={article.url} className='Article' target='_blank'>
    <div className='Article__inner'>
      <div className='Article__inner__image' style={{ backgroundImage: `url('${article.image_url}')` }} />
      <article className='Article__inner__body'>
        <h2 className='Article__inner__body__heading'>
          {article.title}
        </h2>
        <div className='Article__inner__body__content'>
          {article.description}
        </div>
        <footer className='Article__inner__body__footer clearfix'>
          <div className='Article__inner__body__footer__time' />
          <div className='Article__inner__body__footer__logo' />
        </footer>
      </article>
    </div>
  </a>
)

export default Article
