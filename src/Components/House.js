import React from 'react';

// import icons
import {BiBed,BiBath,BiArea} from 'react-icons/bi';




function House({house}) {
  const {image,type,country,address,bedrooms,bathrooms,surface,price} =house;
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img src={image} className='mb-8 h-50 w-80' alt="" />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
        <div className='bg-violet-500 rounded-full text-white px-3'>{country}</div>
      </div>
      <div className='text-lg font-semibold max-w-[260]'>{address}</div>
      <div className='flex gap-x-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'>
            <BiBed/>
          </div>
          <div>{bedrooms}</div>
        </div>
      </div>
      <div className='flex items-center text-gray-600 gap-1'>
        <div className='text-[20px]'>
          <BiBath/>
        </div>
        <div>{bathrooms}</div>
      </div>
      <div className='flex items-center text-gray-600 gap-1'>
        <div className='text-[20px]'>
          <BiArea/>
        </div>
        <div>{surface}</div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mv-4'>$ {price}</div>
    </div>
  )
}

export default House