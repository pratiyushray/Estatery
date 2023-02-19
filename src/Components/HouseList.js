import React, {useContext} from 'react';

// import context
import {HouseContext} from './HouseContext';

//import components
import House from "./House";

//import link
import {Link} from 'react-router-dom';

//import icons
import {ImSpinner2} from 'react-icons/im';

const HouseList=()=> {
  
  const {houses,loading}= useContext(HouseContext);
  // console.log(houses);
  
  // If loading is true
  // if (loading){
  //   return (<ImSpinner2 className='mx-auto animate-spin text-purple-800 text-4xl mt-[200px]'/>)
  // }

  if (houses.length<1){
    return <div className='text-center text-3xl text-gray-400 mt-32 mb-32'>Sorry, nothing found</div>
  }

  return (
    <section className='mb-20'>
      <div className="container mx-auto">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 ml-5 mr-5 gap-y-8 gap-x-8'>
        {houses.map((house,index)=>{
          return (
            <Link to ={`/property/${house.id}`} key={index}>
              <House house={house}/>
            </Link>
          )
        })}
        </div>
      </div>
    </section>
  )
}

export default HouseList