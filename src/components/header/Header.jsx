 
import React, {useEffect, useState}from "react";

import { NavLink} from "react-router-dom";

export default function Header()
{
  let [Search,setSearch]= useState([])  
  
  
   return(
    <>
    
    <div className="xl:flex xl:justify-evenly xs:flex xs:justify-evenly  ">
      <input  className=" xs:h-9 xs:w-60 xs:absolute xs:left-6 xs:top-3 xs:rounded-xl xs:p-2
      xl:h-8 xl:w-5/12 xl:absolute  xl:left-60 xl:top-2 xl:rounded-xl xl:p-2 xl:mt-1" onChange={(e)=> setSearch(e.target.value)}placeholder="Search the experiments"/>
     <button className=" xs:absolute xs:top-3 xs:left-40 xs:h-7 xs:w-14  xs:text-white xs:rounded  xs:text-sm xs:bg-gray-700 xs:ml-32 xs:mt-1 
     xl:absolute xl:top-2  xl:ml-96 xl:mt-1 xl:h-8 xl:w-16  xl:text-white xl:rounded xl:bg-gray-700  " >Search</button>
     </div>  
    
      <div className="xs:bg-green-700 xs:h-12 xs:w-full  xs:ml-0 xs:mt-16 xs:absolute 
       xl:bg-green-700 xl:h-12 xl:w-full xl:p-1 xl:ml-0 xl:mt-16 xl:absolute ">
       
  <ul className=" xs:flex xs:p-4 xs:text-white  xs:text-sm xs:items-center
  xl:flex xl:p-2 xl:text-white ">
  <NavLink to="/"  className={({isActive})=>`${isActive?"text-gray-950":"text-black-400"}`}> 
  
<<<<<<< HEAD
      <li id='li1' className=" xs:ml-0 xs:active:xs:bg-black xs:h-16 xs:mt-4 xs:absolute xs:top-0 xs:hover:underline
=======
      <li id='li1' className=" xs:ml-2 xl:hover:underline xl:hover:text-slate-700
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
       xl:ml-3
       ">
     
       HOME
      </li>
      </NavLink>
     
     
     <NavLink to="arduino" className={({isActive})=>` ${isActive?"text-gray-950":"text-black-400"}`}> 
<<<<<<< HEAD
      <li className=" xl:ml-3 xs:ml-14 xs:active:xs:text-black xs:h-16 xs:mt-4 xs:absolute xs:top-0 xs:hover:underline" >
=======
      <li className="xs:ml-4 xl:ml-3 xl:hover:underline xl:hover:text-slate-700" >
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
          ARDUINO
      </li>
      </NavLink>
     <NavLink to="raspberry" className={({isActive})=>` ${isActive?"text-gray-950":"text-black-400"}`}> 
<<<<<<< HEAD
      <li className=" xl:ml-3 xs:hover:underline xs:ml-32 xs:active:xs:text-black xs:h-16 xs:mt-4 xs:absolute xs:top-0 xs:hover:underline">
=======
      <li className="xs:ml-4 xl:ml-3 xl:hover:underline xl:hover:text-slate-700">
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
      RASPBERRY PI
      </li>
      </NavLink> 
      <NavLink to="esp" className={({isActive})=>` ${isActive?"text-gray-950":"text-black-400"}`}>
<<<<<<< HEAD
      <li className=" xl:ml-3 xs:ml-52   xs:active:xs:text-black xs:h-16 xs:mt-4 xs:absolute xs:top-0 xs:left-10 xs:hover:underline" >
=======
      <li className="xs:ml-4 xl:ml-3 xl:hover:underline xl:hover:text-slate-700" >
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
         ESP32
      </li>
      </NavLink>
      
  </ul>
      
      </div>
      
      </>
    )
}
