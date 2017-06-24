import React from "react";
import cn from "classnames";
import { Link } from "react-router";

export const NewsViewSidebar = ({
  articleSources,
  onSourceSelect,
}) => (
  <aside className="NewsViewSidebar">
    <div className="NewsViewSidebar__inner">
      <header className="NewsViewSidebar__header">
        <h1 className="NewsViewSidebar__header__h1">
          Muchnews
        </h1>
      </header>
      <nav className="NewsViewSidebar__sources">
        <ul className="NewsViewSidebar__sources__list">
          {articleSources.map(articleSource =>
            <li className="NewsViewSidebar__sources__item" onClick={() => onSourceSelect(articleSource.id)}>
              {articleSource.name}
            </li>
          )}
        </ul>
      </nav>
    </div>  
  </aside>
);

NewsViewSidebar.propTypes = {
  articleSources: React.PropTypes.array.isRequired,
};

export default NewsViewSidebar;
