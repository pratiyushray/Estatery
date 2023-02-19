import React from 'react';
import {useState,useEffect,createContext} from 'react';

//import data
import {housesData} from "../data";

//create context

export const HouseContext=createContext();

const HouseContextProvider=({children}) =>{
  const [houses,setHouses]=useState(housesData);
  const [country,setCountry]=useState('Location (any)');
  const [countries,setCountries]=useState([]);
  const [property,setProperty]=useState('Property type (any)');
  const [properties,setProperties]=useState([]);
  const [price,setPrice]=useState('Price range (any)');
  const [loading,setLoading]=useState(false);

  //return all countries
  useEffect(()=>{
    const allCountries = houses.map((house)=>{
      return house.country;
    });
    // console.log(allCountries);
    
    //remove duplicates
    const uniqueCountries=['Location (any)',...new Set(allCountries)]
    // console.log(uniqueCountries);

    //set countries state
    setCountries(uniqueCountries);

  },[]);

  //return all properties
  useEffect(()=>{
    const allProperties = houses.map((house)=>{
      return house.type;
    });
    // console.log(allCountries);
    
    //remove duplicates
    const uniqueProperties=['Property (any)',...new Set(allProperties)]
    // console.log(uniqueCountries);

    //set properties state
    setProperties(uniqueProperties);

  },[]);

  const handleClick=()=>{

    // set loading
    // loading(true)
    // setTimeout(()=>{
    //   setLoading(false)
    // },1000)
    // console.log(country,property,price);

    //create a function that checks if the string includes '(any)'
    const isDefault=(str)=>{
      return str.split(' ').includes('(any)');
    };

    // console.log(isDefault(country));
    // console.log(price);

    //get first value of price and parse it to number 
    const minPrice=(parseInt(price.split(' ')[0]));
    // console.log(minPrice)
    //get second value of price which is the maximum price & parse it to number
    // const maxPrice=(parseInt(price.split(' ')[2]));
    let maxPrice;
    if (minPrice>=100000){
      maxPrice=minPrice+30000;
    }
    else if (minPrice===10000){
      maxPrice=minPrice+20000;
    }
    else{
      maxPrice=minPrice+10000;
    }

    // console.log(maxPrice);

    const newHouses=housesData.filter((house)=>{
      // console.log(parseInt(house.price));
      const housePrice=(parseInt(house.price));
      // return housePrice

      //if all values are selected 
      if(house.country===country && house.type===property && housePrice >=minPrice && housePrice<=maxPrice){
        return house;
      }

      // //If all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)){
        // console.log(house);
        return house;
      }

      // //If country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country ===country;
      }

      // //if property is not default
      if(!isDefault(property) && isDefault(country) && isDefault(price)){
        return house.type ===property;
      }

      // //If price is not default 
      if(!isDefault(price) && isDefault(country) && isDefault(property)){
        if (housePrice>=minPrice&& housePrice<=maxPrice){
          return house;
        }
      }

      // //If country & Property is not default
      if(!isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.country===country && house.type===property;
      }

      // //If country and price is not default 
      if (!isDefault(country) && isDefault(property) && !isDefault(price)){
        if (housePrice>=minPrice && housePrice<=maxPrice){
          return house.country===country;
        }
      }

      // //property and price is not default
      if(!isDefault(country) && !isDefault(property) && !isDefault(price)){
        if(housePrice>=minPrice && housePrice<=maxPrice){
          return house.type===property;
        }
      }
    });

    // console.log(newHouses);
    // return newHouses;
    setTimeout(()=>{
      return newHouses.length<1?setHouses([]):
      setHouses(newHouses);
    })


    // return newHouses

  }

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,

    }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider;