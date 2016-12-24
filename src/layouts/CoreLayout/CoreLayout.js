import React from 'react';
import Header from '../../components/Header';
import { connect } from "react-redux";
import './CoreLayout.scss';
import '../../styles/core.scss';

export class CoreLayout extends React.Component {

	componentDidMount() {
		if (!this.props.user.token && this.props.location.pathname.split("/")[1] !== "login") {
			this.props.router.push("/login");
		} else if(this.props.user.token && this.props.location.pathname.split("/")[1] === "login") {
			console.log('in login')
			this.props.router.push("/news");
		}
	}

	render() {
			console.log(this.props.location)

		let { children } = this.props;
		return (
			<div className='container text-center'>
			    <Header />
			    <div className='core-layout__viewport'>
			      {children}
			    </div>
			  </div>
		)
	}
}

const mapStateToProps = state => {
  return {
  	user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);