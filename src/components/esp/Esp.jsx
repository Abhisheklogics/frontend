import React from "react";
import { NavLink, Outlet } from "react-router-dom";



export default function Esp()
{

  
   
    return(
        <>
       <div className=" xs:hidden xs:absolute xs:mt-28 xs:p-2 xs:m-2 xs:mt-16
       xl:absolute xl:mt-28 xl:p-2 xl:m-2 xl:mt-16" >
       <ul className=" xs:p-1 xs:m-1 xs:text-blue-400
       xl:p-1 xl:m-1 xl:text-blue-400">
       
        
        
        <NavLink to="Esp2" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
        <li >
          ESP Experiment 2
        </li>
        </NavLink>
        <NavLink to="Esp3" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li >
        ESP Experiment 3
        </li>
        </NavLink>
        <NavLink to="Esp4" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
        ESP Experiment 4
        </li>
        </NavLink>
        <NavLink to="Esp5" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        
        <li >
        ESP Experiment 5
        </li>
        </NavLink>
        <NavLink to="Esp6" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li>
        ESP Experiment 6
        </li>
        </NavLink>
        <NavLink to="Esp7" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li >
        ESP Experiment 7
        </li>
        </NavLink>
        <NavLink to="Esp8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
        ESP Experiment 8
        </li>
        </NavLink>
        <NavLink to="Esp9" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
        ESP Experiment 9
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