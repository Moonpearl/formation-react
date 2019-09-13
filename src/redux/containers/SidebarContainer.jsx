import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';

class SidebarContainer extends Component {
  render() {
    return (
      <Sidebar articleTitles={this.props.articleTitles} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    articleTitles: state.articles.map( article => article.title ),
  };
}

export default connect(mapStateToProps)(SidebarContainer);
