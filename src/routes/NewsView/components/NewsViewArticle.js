import React from "react";
import cn from "classnames";
import { Link } from "react-router";
import NickImagePreloader from "components/common/NickImagePreloader";

export const NewsViewArticle = ({
  article,
}) => (
  <a href={article.url} className="NewsViewArticle" target="_blank">
    <div className="NewsViewArticle__inner">
      <div className="NewsViewArticle__inner__backgroundPlaceholder">
        <NickImagePreloader fillBackgroundImage imageUrl={article.image_url}>
          <div className="Article__inner__image" />
        </NickImagePreloader>
      </div>
      <article className="NewsViewArticle__inner__body">
        <h2 className="NewsViewArticle__inner__body__heading">
          {article.title}
        </h2>
        <div className="NewsViewArticle__inner__body__content">
          {article.description}
        </div>
        <footer className="NewsViewArticle__inner__body__footer clearfix">
          <div className="NewsViewArticle__inner__body__footer__time" />
          <div className="NewsViewArticle__inner__body__footer__logo" />
        </footer>
      </article>
    </div>
  </a>
);

NewsViewArticle.propTypes = {
  article: React.PropTypes.object.isRequired,
};

export default NewsViewArticle;
