import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllArticles from '../../components/AllArticles/AllArticles';

class AllArticlesContainer extends Component {
  render() {
    return (
      <AllArticles articles={this.props.articles} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { articles: state.articles }
}

export default connect(mapStateToProps)(AllArticlesContainer);
