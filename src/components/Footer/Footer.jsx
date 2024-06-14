import React from "react";
import { NavLink } from "react-router-dom";


export default function Footer()
{
    return (
        <>
<footer className="xs:hidden xl:bg-white xl:absolute xl:ml-0 xl:w-full xl:mt-72 xl:top-full xl:h-24 xl:rounded xl:shadow-lg xl:m-4 xl:dark:bg-gray-800">
    
     
    <ul className=" xl:flex-wrap  xl:flex  xl:p-3 xl:mt-3 xl:text-sm xl:font-medium xl:text-gray-500 xl:dark:text-gray-400 xl:sm:mt-0">
         <p className="xl:text-xl xl:text-black ">About</p> 
        <li className="xl:hover:underline xl:mr-0 xl:absolute xl:me-4 xl:md:me-6 xl:mt-7">
            <NavLink  to="About" >About</NavLink>
        </li>
      
        <p className="xl:text-xl xl:text-black  xl:ml-12">Contact</p> 
        <li className="xl:hover:underline xl:ml-28 xl:mt-7 xl:absolute ">
            <NavLink  to="Contact">Contact</NavLink>
        </li>
        <p className="xl:text-xl xl:text-black xl:absolute xl:right-40">
            Address
           
        </p>
        <li className="xl:absolute xl:right-32 xl:top-10 ">
            Dayalbagh,Agra
        </li>
    </ul>
<hr className="xl:mt-8 xl:hover:bg-black"/>
</footer>

        
        </>
    )
}