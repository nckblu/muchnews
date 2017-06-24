import React from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import "./CoreLayout.scss";
import "../../styles/core.scss";
import {
	goToNews,
	goToLogin,
} from "actions/routes";

export class CoreLayout extends React.Component {

  componentDidMount() {
    if (!this.props.user.token && this.props.location.pathname.split("/")[1] !== "login") {
      this.props.goToLogin();
    } else if (this.props.user.token && this.props.location.pathname.split("/")[1] === "login") {
      this.props.goToNews();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (!nextProps.user.token && nextProps.location.pathname.split("/")[1] !== "login") {
      nextProps.routes.push("/login");
    } else if (nextProps.user.token && nextProps.location.pathname.split("/")[1] === "login") {
      this.props.goToNews();
    }
  }

  render() {
    console.log(this.props.location);

    let { children } = this.props;
    return (
      <div className="container text-center">
        <Header />
        <div className="core-layout__viewport">
          {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  	user: state.user.toJS(),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToNews: () => dispatch(goToNews()),
    goToLogin: () => dispatch(goToLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);
