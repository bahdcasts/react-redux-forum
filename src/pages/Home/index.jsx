import React, { Component } from 'react';
import { connect } from 'react-redux';

import loadingGif from '../../loading.gif'
import HomeThreads from './HomeThreads';
import { getThreads } from '../../store/actions/threads'
import { addQueryParam } from '../../store/actions/router'

class HomeContainer extends Component {
  componentWillMount() {
    this.props.getThreads();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.search !== this.props.search) {
      this.props.getThreads()
    }
  }

  getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage);
  }

  handlePageChange = (page) => {
    this.props.addQueryParam('page', page.selected + 1)
  }

  render() {
    console.log(this.props.threadsData)
    return (
      <div>
        {
          !this.props.loading &&
          <HomeThreads
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
  search: state.router.location.search
})

const mapDispatchToProps = (dispatch) => ({
  getThreads: (page) => {
    dispatch(getThreads(page))
  },
  addQueryParam: (name, value) => dispatch(addQueryParam(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
