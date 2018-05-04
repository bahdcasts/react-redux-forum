import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeThreads from './HomeThreads';
import { getThreads } from '../../store/actions/threads'

class HomeContainer extends Component {
  componentWillMount() {
    this.props.getThreads();
  }

  getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage);
  }

  handlePageChange = (page) => {
    this.props.getThreads(page.selected + 1);
  }

  render() {
    console.log(this.props.threadsData)
    return (
      <HomeThreads
        threads={this.props.threadsData.data}
        handlePageChange={this.handlePageChange}
        pageCount={this.getPageCount(this.props.threadsData.total, this.props.threadsData.per_page)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  threadsData: state.threads
}) 

const mapDispatchToProps = (dispatch) => ({
  getThreads: (page) => {
    dispatch(getThreads(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
