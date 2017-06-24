import React from "react";

export class LoginLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
  }

  render() {
    let { children } = this.props;
    return (
      <div className="LoginLayout">
        {children}
      </div>
    );
  }
}

export default LoginLayout;
