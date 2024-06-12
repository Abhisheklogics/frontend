import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer()
{
    return (
        <>
        
       
         
    

<footer className="xs:hidden xl:bg-white xl:absolute xl:ml-0 xl:w-full xl:mt-72 xl:top-full xl:h-18 xl:rounded xl:shadow-lg xl:m-4 xl:dark:bg-gray-800">
    
     
    <ul className="xl:flex xl:flex-wrap   xl:p-3 xl:mt-3 xl:text-sm xl:font-medium xl:text-gray-500 xl:dark:text-gray-400 xl:sm:mt-0">
        <li className="xl:hover:underline xl:ml-2 xl:me-4 xl:md:me-6">
            <NavLink  to="About" >About</NavLink>
        </li>
        <li className="xl:hover:underline xl:ml-2 xl:me-4 xl:md:me-6">
            <NavLink to="Privacy Policy" >Privacy Policy</NavLink>
        </li>
       
        <li className="xl:hover:underline xl:ml-2">
            <NavLink  to="Contact">Contact</NavLink>
        </li>
    </ul>
<hr className=" "/>
</footer>

        
        </>
    )
}