import React from 'react';

import Search from './Search';
import HouseList from './HouseList';
import PropertyDetails from './PropertyDetails';



function Rent() {
  return (
    <div>
      <Search/>
      <HouseList/>
      {/* <PropertyDetails/> */}
    </div>
  )
}

export default Rent