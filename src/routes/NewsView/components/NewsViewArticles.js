import React from "react";
import cn from "classnames";
import NewsViewArticle from "./NewsViewArticle";

export const NewsViewArticles = ({
  articles,
}) => (
  <div className="NewsViewArticles">
    {articles.map(article =>
      <div className="NewsViewArticles__newsViewArticle" key={`article-${article.id}`}>
        <NewsViewArticle article={article} />
      </div>
      )}
  </div>
);

NewsViewArticle.propTypes = {
  articles: React.PropTypes.array.isRequired,
};

export default NewsViewArticles;
