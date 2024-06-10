import React from "react";
import { NavLink, Outlet } from "react-router-dom";



export default function Arduino()
{

  
   
    return(
        <>
       <div className=" xs:h-20   xs:w-80 xs:text-white  xs:bg-white xs:overflow-auto xs:flex-wrap xs:flex-1
        xs:flex-row xs:justify-evenly xs:mt-32  xs:w-full  xs:absolute   
     xl:block xl:absolute xl:mt-28 xl:p-2 xl:m-1 " >
       <ul className="   xs:p-2 xs:text-2xl  
       xl:p-1 xl:m-1 xl:text-blue-400">
       
       <NavLink to="ex1" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
       <li className="xl:hidden  ">
          Experiment:1
        </li>
        <li className="xs:hidden ">
            Arduino Experiment 1
        </li>
        </NavLink> 
        
        <NavLink to="ex2" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
        <li className="xl:hidden ">
          Experiment:2
        </li>
        <li className="xs:hidden">
            Arduino Experiment 2
        </li>
        </NavLink>
        <NavLink to="ex3" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li className="xl:hidden ">
          Experiment:3
        </li>
        <li className="xs:hidden">
            Arduino Experiment 3
        </li>
        </NavLink>
        <NavLink to="ex4" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li className="xl:hidden ">
          Experiment:4
        </li>
        <li className="xs:hidden" >
            Arduino Experiment 4
        </li>
        </NavLink>
        <NavLink to="ex5" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>

        <li className="xl:hidden ">
          Experiment:5
        </li>        
        <li className="xs:hidden">
            Arduino Experiment 5
        </li>
        </NavLink>
        <NavLink to="ex6" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li className="xl:hidden ">
          Experiment:6
        </li>
        <li className="xs:hidden">
            Arduino Experiment 6
        </li>
        </NavLink>
        <NavLink to="ex7" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li className="xl:hidden ">
          Experiment:7
        </li>
        <li  className="xs:hidden">
        Arduino Experiment 7
        </li>
        </NavLink>
        <NavLink to="ex8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li className="xl:hidden ">
          Experiment:8
        </li>
        <li className="xs:hidden">
            Arduino Experiment 8
        </li>
        </NavLink>
        <NavLink to="ex9" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li className="xl:hidden ">
          Experiment:9
        </li>
        <li className="xs:hidden">
            Arduino Experiment 9
        </li>
        </NavLink>
        <NavLink to="ex10" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li className="xl:hidden " >
          Experiment:10
        </li>
        
        <li className="xs:hidden ">
            Arduino Experiment 10
        </li>
        </NavLink>
        <NavLink to="ex11" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li className="xl:hidden ">
          Experiment:11
        </li>
        <li className="xs:hidden ">
            Arduino Experiment 11
        </li>
        </NavLink>
        <NavLink to="ex12" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li className="xl:hidden ">
          Experiment:12
        </li>
        <li className="xs:hidden " >
            Arduino Experiment 12
        </li>
        </NavLink>
        <NavLink to="ex13" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li className="xl:hidden ">
          Experiment:13
        </li>
        <li className="xs:hidden">
            Arduino Experiment 13
        </li>
        </NavLink>
        <NavLink to="ex14" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li className="xl:hidden ">
          Experiment:14
        </li>
        <li className="xs:hidden">
            Arduino Experiment 14
        </li>
        </NavLink>
        <NavLink to="ex15" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li className="xl:hidden ">
          Experiment:15
        </li>
        
        <li className="xs:hidden">
            Arduino Experiment 15
        </li>
        </NavLink>
        <NavLink to="ex16" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li className="xl:hidden">
          Experiment:16
        </li>
        <li className="xs:hidden">
            Arduino Experiment 16
        </li>
        </NavLink>
        <NavLink to="ex17"className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li className="xl:hidden ">
          Experiment:17
        </li>
        <li className="xs:hidden">
        Arduino Experiment 17
        </li>
        </NavLink>
        <NavLink to="ex18" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li className="xl:hidden ">
          Experiment:18
        </li>
        <li className="xs:hidden">
            Arduino Experiment 18
        </li>
        </NavLink>
        <NavLink to="ex19" className={({isActive})=>`${isActive?"text-orange-900":"text-gray-900"}`} >
        <li className="xl:hidden ">
          Experiment:19
        </li>
        <li className="xs:hidden">
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