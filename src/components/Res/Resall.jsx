import React,{useState} from "react";
import { NavLink, Outlet } from "react-router-dom";



export default function smallRes()
{
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
   
   
    return(
        <>
         <div className="xs:flex xs:h-screen xs:block xl:hidden  xs:ml-10">
      <div className="xs:p-4">
        <div className="xs:text-3xl xs:mt-28 xs:cursor-pointer xs:ml-40 " onClick={toggleSidebar}>
      
          </div>
          </div>
          <div
            className={`xs:absolute xs:z-10 e xs:top-36 xs:left-0 xs:ml-96 xs:h-fit xs:bg-gray-800 xs:text-white xs:w-fit xs:transform ${
              isSidebarOpen ? 'xs:translate-x-0' : 'xs:-translate-x-full'
            } xs:transition-transform xs:duration-300 p-6`}
          >
            <div className="xs:text-3xl xs:cursor-pointer xs:absolute xs:top-0 xs:ml-72 xs:right-4" onClick={toggleSidebar}>
             
            </div>
            <div className="xs:ml-4 xs:p-4 xs:flex-grow ">
           
     
           <ul className="xs:text-lg xs:mr-2 xs:p-2 ">
          
          
           
           <NavLink to="res2" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
           <li className="xl:hover:underline xs:text-white">
               Arduino Experiment 2
           </li>
           </NavLink>
           <NavLink to="res3" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
           <li className="xl:hover:underline xs:text-white">
               Arduino Experiment 3
           </li>
           </NavLink>
           <NavLink to="res4" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
           <li className="xl:hover:underline xs:text-white">
               Arduino Experiment 4
           </li >
           </NavLink>
           <NavLink to="res5" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
           
           <li className="xl:hover:underline xs:text-white" >
               Arduino Experiment 5
           </li>
           </NavLink>
           <NavLink to="res6" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
           <li className="xl:hover:underline xs:text-white">
               RaspberryPi Experiment 5
           </li>
           </NavLink>
           <NavLink to="res7" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
           <li className="xl:hover:underline xs:text-white">
           Arduino Experiment 7
           </li>
           </NavLink>
           <NavLink to="res8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
           <li className="xl:hover:underline xs:text-white" >
               Arduino Experiment 8
           </li>
           </NavLink>
            </ul>
          </div>
          </div>
         
        
          </div>
          
          <div className="xl:mt-32 xl:ml-6  xs:hidden">
           
     
           <ul className="">
          
          
           
           <NavLink to="res2" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
           <li className="xl:hover:underline ">
           RaspberryPi Experiment 1
           </li>
           </NavLink>
           <NavLink to="res3" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
           <li className="xl:hover:underline">
           RaspberryPi Experiment 2
           </li>
           </NavLink>
           <NavLink to="res4" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
           <li className="xl:hover:underline ">
           RaspberryPi Experiment 3
           </li >
           </NavLink>
           <NavLink to="res5" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
           
           <li className="xl:hover:underline " >
           RaspberryPi Experiment 4
           </li>
           </NavLink>
           <NavLink to="res6" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
           <li className="xl:hover:underline ">
               RaspberryPi Experiment 5
           </li>
           </NavLink>
           <NavLink to="res7" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
           <li className="xl:hover:underline">
           RaspberryPi Experiment 6
           </li>
           </NavLink>
           <NavLink to="res8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
           <li className="xl:hover:underline " >
           RaspberryPi Experiment 7
           </li>
           </NavLink>
           <NavLink to="res8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
           <li className="xl:hover:underline xs:text-white" >
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
/* */
            
       