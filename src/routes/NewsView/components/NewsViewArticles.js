import React from "react";
import cn from "classnames";
import NewsViewArticle from "./NewsViewArticle";
import NewsViewArticlesSkeleton from "./skeletons/NewsViewArticlesSkeleton";

export const NewsViewArticles = ({
  articles,
  working,
  switchingSource,
}) => (
  <div className="NewsViewArticles">
    {!switchingSource
    ? <div className="NewsViewArticles__inner">
      {articles.map(article =>
        <div className="NewsViewArticles__newsViewArticle" key={`article-${article.id}`}>
          <NewsViewArticle article={article} />
        </div>
      )}
    </div>
    : <NewsViewArticlesSkeleton />
    }
    {working && !switchingSource &&
      <NewsViewArticlesSkeleton />
    }
  </div>
);

NewsViewArticle.propTypes = {
  articles: React.PropTypes.array.isRequired,
};

export default NewsViewArticles;
