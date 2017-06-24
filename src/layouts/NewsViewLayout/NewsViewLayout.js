import React from "react";

export class NewsViewLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
  }

  render() {
    let { children } = this.props;
    return (
      <div className="NewsViewLayout">
        {children}
      </div>
    );
  }
}

export default NewsViewLayout;
