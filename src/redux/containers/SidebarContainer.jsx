import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';

class SidebarContainer extends Component {
  render() {
    return (
      <Sidebar {...this.props} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    articleTitles: state.articles.map( article => article.title ),
    logged: state.logged,
  };
}

export default connect(mapStateToProps)(SidebarContainer);
