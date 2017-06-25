/* Based on my angular directive: https://github.com/nckblu/ng-img-preload/ */
import React from "react";
import cn from "classnames";

export class NickImagePreloader extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
    imageUrl: React.PropTypes.string,
    animateClass: React.PropTypes.string,
    fillBackgroundImage: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.images = [];
  }

  componentDidUpdate(prevProps) {
    if (prevProps.imageUrl !== this.props.imageUrl) {
      this.initialisePreload();
    }
  }

  componentDidMount() {
    this.initialisePreload();
  }

  componentWillUnmount() {
    this.images.forEach(image => {
      image.onload = () => {};
    });
  }

  initialisePreload() {
    const image = new Image();
    image.src = this.props.imageUrl;
    this.images.push(image);
    if (image.complete) {
      this.handleImageLoaded();
      image.onload = () => {};
    } else {
      image.onload = () => {
        this.handleImageLoaded();
        image.onload = () => {};
      };
    }
  }

  render() {
    const { loaded } = this.state;
    return (
      <div className={cn("NickImagePreloader", { done: loaded })}>
        {this.renderChildren()}
      </div>
    );
  }

  renderChildren() {
    const { children, animateClass } = this.props;
    const childClasses = cn(
      children.props.className,
      "animated",
      { "animated--hidden": !this.state.loaded },
      { [`${animateClass}`]: this.state.loaded },
      { "done": this.state.loaded }
    );

    const style = this.props.fillBackgroundImage ? { backgroundImage: `url(${this.props.imageUrl})` } : null;
    const newProps = {
      ...children.props,
      className: childClasses,
      style,
    };

    return React.cloneElement(children, newProps);
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
  }
}

NickImagePreloader.defaultProps = {
  animateClass: "fadeIn",
};

export default NickImagePreloader;

