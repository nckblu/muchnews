import React from 'react'
import { connect } from "react-redux";
import { 
  fetchPopular,
} from "actions/articles";

export const HomeView = () => (
  <div>

  	News here
   
  </div>
)

const mapStateToProps = state => {
  return {
   
  };
};

const mapDispatchToProps = dispatch => {
  return {
    	
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);