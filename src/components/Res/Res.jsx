import React from "react";
import { NavLink, Outlet } from "react-router-dom";



export default function Res()
{

   
   
    return(
        <>
        <div className="xs:hidden xs:mt-28 xs:p-1 xs:m-2 xs:mt-16
        xl:absolute xl:mt-28 xl:p-1 xl:m-2 xl:mt-16" >
       <ul className="xl:p-1 xl:m-1 xl:text-blue-400">
       
        
        
        <NavLink to="res2" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
        <li >
          RaspberryPi Experiment 2
        </li>
        </NavLink>
        <NavLink to="res3" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li >
        RaspberryPi Experiment 3
        </li>
        </NavLink>
        <NavLink to="res4" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
        RaspberryPi Experiment 4
        </li>
        </NavLink>
        <NavLink to="res5" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        
        <li >
        RaspberryPi Experiment 5
        </li>
        </NavLink>
        <NavLink to="res6" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li>
        RaspberryPi Experiment 6
        </li>
        </NavLink>
        <NavLink to="res7" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
        <li >
        RaspberryPi Experiment 7
        </li>
        </NavLink>
        <NavLink to="res8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
        <li >
        RaspberryPi Experiment 8
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