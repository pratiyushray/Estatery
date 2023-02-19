import React from 'react';
import "./Loader.css";

function Loader() {
  return (
    <div className='mainLoaderContainer flex flex-col items-center'>
        <div className="insideText">Estatery</div>
        <div className="gooey">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    </div>
  )
}

export default Loader