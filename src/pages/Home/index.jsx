import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeThreads from './HomeThreads';
import { getThreads } from '../../store/actions/threads'

class HomeContainer extends Component {
  componentWillMount() {
    this.props.getThreads();
  }
  render() {
    return (
      <HomeThreads
        threads={this.props.threadsData.data}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  threadsData: state.threads
}) 

const mapDispatchToProps = (dispatch) => ({
  getThreads: () => {
    dispatch(getThreads())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
