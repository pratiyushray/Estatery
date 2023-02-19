import React from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import {RiSearch2Line} from 'react-icons/ri';
import { useContext } from 'react';

//import context
import { HouseContext } from './HouseContext';

const Search=()=> {
  // const {houses}=useContext(HouseContext);
  // console.log(houses);
  const {handleClick}=useContext(HouseContext);
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg border-2 mt-20'>
      <CountryDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>
      <button onClick={()=>handleClick()} className=' bg-purple-500 hover:bg-purple-700 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
        <RiSearch2Line/>
      </button>
    </div>
  )
}

export default Search