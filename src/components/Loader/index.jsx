import React from 'react'

import loadingGif from '../../loading.gif'

const Loader = ({ width, height }) => ((
  <div className="text-center">
    <img src={loadingGif} alt="" width={width ? width : "40px"} height={height ? height : "40px"} className="img" />
  </div>
))

export default Loader
