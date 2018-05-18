import React from 'react';
import { connect } from 'react-redux';
import { parse } from '../../lib/query-string'

import Loader from './../Loader'
import getChannels from '../../store/actions/channels';
import { changeQueryParam } from '../../store/actions/router'

import ChannelsList from './ChannelsList'

class ChannelsContainer extends React.Component {
  componentWillMount() {
    this.props.getChannels();
  }

  render() {
    return <div>
      {
        !this.props.loading &&
        <ChannelsList
          selectedChannel={this.props.selectedChannel}
          setChannelQuery={this.props.setChannelQuery} 
          channels={this.props.channels}
        />
      }
      {
        this.props.loading &&
        <Loader />
      }
    </div>;
  }
}

const mapStateToProps = state => ({
  channels: state.channels.data,
  loading: state.channels.loading,
  selectedChannel: parse(state.router.location.search).channel
});

const mapDispatchToProps = dispatch => ({
  getChannels: () => {
    dispatch(getChannels())
  },
  setChannelQuery: (slug) => dispatch(changeQueryParam('channel', slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsContainer);
