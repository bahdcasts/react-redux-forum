import React, { Component } from 'react';
import { connect } from 'react-redux';

import Threads from './Threads';
import loadingGif from '../../loading.gif'
import { getThreads } from '../../store/actions/threads'
import { changeQueryParams } from '../../store/actions/router'

class ThreadsContainer extends Component {
  componentWillMount() {
    this.props.getThreads();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.router.location.search !== this.props.router.location.search) {
      this.props.getThreads()
    }
  }

  getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage);
  }

  handlePageChange = (page) => {
    this.props.changeQueryParams(page.selected + 1);
  }

  render() {
    return (
      <div>
        {
          !this.props.loading &&
          <Threads
            threads={this.props.threadsData.data}
            handlePageChange={this.handlePageChange}
            pageCount={this.getPageCount(this.props.threadsData.total, this.props.threadsData.per_page)}
            currentPage={this.props.threadsData.current_page - 1}
          />
        }
        {
          this.props.loading &&
          <div className="text-center">
            <img src={loadingGif} alt="" width="80px" height="80px" className="img"/>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  threadsData: state.threads,
  loading: state.threads.loading,
  router: state.router
})

const mapDispatchToProps = (dispatch) => ({
  getThreads: (page) => {
    dispatch(getThreads(page))
  },
  changeQueryParams: (value) => {
    dispatch(changeQueryParams(value, 'page'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThreadsContainer);
