import React from 'react'

const ChannelsList = ({ channels }) => (
  <ul className="list-group">
    {channels.map(channel => <li key={channel.id} className="list-group-item">{channel.name}</li>)}
  </ul>
);

export default ChannelsList