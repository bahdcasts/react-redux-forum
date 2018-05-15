import React from 'react'

import CheckedIcon from '../../CheckedIcon'

const ChannelsList = ({ channels, setChannelQuery, selectedChannel }) => (
  <ul className="list-group">
    {channels.map(channel => (
      <li
        key={channel.id}
        onClick={() => setChannelQuery(channel.slug)}
        className="list-group-item">
        {
          selectedChannel === channel.slug &&
          <CheckedIcon />
        }
        {channel.name}
      </li>
    ))}
  </ul>
);

export default ChannelsList