import React from "react";
import { NavLink, Outlet } from "react-router-dom";



export default function Arduino()
{

  
   
    return(
        <>
       <div className=" xs:h-10 xs:bg-white  xs:hidden  xs:overflow-scroll xs:justify-evenly xs:p-2 xs:mt-1 xs:mt-28  xs:w-full xs:flex xs:absolute   
     xl:block xl:absolute xl:mt-28 xl:p-2 xl:m-1 " >
       <ul className="xs:flex  xs:scroll-auto xs:mt-10 xs:text-blue-400
       xl:p-1 xl:m-1 xl:text-blue-400">
       
       <NavLink to="ex1" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
       
        <li >
            Arduino Experiment 1
        </li>
        </NavLink> 
        
        <NavLink to="ex2" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
        <li >
            Arduino Experiment 2
        </li>
        </NavLink>
        <NavLink to="ex3" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li >
            Arduino Experiment 3
        </li>
        </NavLink>
        <NavLink to="ex4" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
            Arduino Experiment 4
        </li>
        </NavLink>
        <NavLink to="ex5" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        
        <li >
            Arduino Experiment 5
        </li>
        </NavLink>
        <NavLink to="ex6" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li>
            Arduino Experiment 6
        </li>
        </NavLink>
        <NavLink to="ex7" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li >
        Arduino Experiment 7
        </li>
        </NavLink>
        <NavLink to="ex8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
            Arduino Experiment 8
        </li>
        </NavLink>
        <NavLink to="ex9" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
            Arduino Experiment 9
        </li>
        </NavLink>
        <NavLink to="ex10" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        
        <li >
            Arduino Experiment 10
        </li>
        </NavLink>
        <NavLink to="ex11" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
            Arduino Experiment 11
        </li>
        </NavLink>
        <NavLink to="ex12" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li >
            Arduino Experiment 12
        </li>
        </NavLink>
        <NavLink to="ex13" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
            Arduino Experiment 13
        </li>
        </NavLink>
        <NavLink to="ex14" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
            Arduino Experiment 14
        </li>
        </NavLink>
        <NavLink to="ex15" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        
        <li>
            Arduino Experiment 15
        </li>
        </NavLink>
        <NavLink to="ex16" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
            Arduino Experiment 16
        </li>
        </NavLink>
        <NavLink to="ex17"className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li >
        Arduino Experiment 17
        </li>
        </NavLink>
        <NavLink to="ex18" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
            Arduino Experiment 18
        </li>
        </NavLink>
        <NavLink to="ex19" className={({isActive})=>`${isActive?"text-orange-900":"text-gray-900"}`} >
        <li >
            Arduino Experiment 19
        </li>
        </NavLink>
       </ul>
  
       </div>
       <div>
        
        <Outlet/>
       </div>
      
        </>
    )
}