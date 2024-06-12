import React ,{useState} from "react";
import { NavLink, Outlet } from "react-router-dom";



export default function smallArduino()
{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
   
    return(
        <>
       <div className="xs:flex xs:h-screen xl:hidden xs:block">
      <div className="xs:p-4">
        <div className="xs:text-3xl xs:mt-28 xs:cursor-pointer " onClick={toggleSidebar}>
       
        </div>
      </div>
      <div
        className={`xs:absolute xs:z-10 e xs:top-0 xs:left-0 xs:h-fit xs:bg-gray-800 xs:text-white xs:w-fit xs:transform ${
          isSidebarOpen ? 'xs:translate-x-0' : 'xs:-translate-x-full'
        } xs:transition-transform xs:duration-300 p-6`}
      >
        <div className="xs:text-3xl xs:cursor-pointer xs:absolute xs:top-4 xs:ml-20 xs:right-4" onClick={toggleSidebar}>
          &times; {/* Close icon */}
        </div>
        <div className="xs:ml-4 xs:p-4 xs:flex-grow ">
       
 
       <ul className="xs:text-lg xs:mr-2 xs:p-2  ">
      
      <NavLink to="ex1" className={({isActive})=>`${isActive?"text-white-950":"text-gray-900 "} `}>
      
       <li className=" xs:text-white ">
           Arduino Experiment 1
       </li>
       </NavLink> 
       
       <NavLink to="ex2" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment 2
       </li>
       </NavLink>
       <NavLink to="ex3" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment 3
       </li>
       </NavLink>
       <NavLink to="ex4" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xs:text-white">
           Arduino Experiment 4
       </li >
       </NavLink>
       <NavLink to="ex5" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       
       <li className="xs:text-white" >
           Arduino Experiment 5
       </li>
       </NavLink>
       <NavLink to="ex6" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className=" xs:text-white">
           Arduino Experiment 6
       </li>
       </NavLink>
       <NavLink to="ex7" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline xs:text-white">
       Arduino Experiment 7
       </li>
       </NavLink>
       <NavLink to="ex8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white" >
           Arduino Experiment 8
       </li>
       </NavLink>
       <NavLink to="ex9" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white" >
           Arduino Experiment9
       </li>
       </NavLink>
       <NavLink to="ex10" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment10
       </li>
       </NavLink>
       <NavLink to="ex11" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment11
       </li>
       </NavLink>
       <NavLink to="ex12" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment12
       </li>
       </NavLink>
       <NavLink to="ex13" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment13
       </li>
       </NavLink>
       <NavLink to="ex14" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment14
       </li>
       </NavLink>
       <NavLink to="ex15" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment15
       </li>
       </NavLink>
       <NavLink to="ex16" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment16
       </li>
       </NavLink>
       <NavLink to="ex17"className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline xs:text-white">
       Arduino Experiment17
       </li>
       </NavLink>
       <NavLink to="ex18" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment18
       </li>
       </NavLink>
       <NavLink to="ex19" className={({isActive})=>`${isActive?"text-orange-900":"text-gray-900"}`} >
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment19
       </li>
       </NavLink>
      </ul>
      </div>
      </div>
     
    
      </div>
      <div className=" xl:absulote xl:mt-32 xl:ml-6 ">
       
 
       <ul className="xs:text-lg xs:mr-2 xs:p-2  ">
      
      <NavLink to="ex1" className={({isActive})=>`${isActive?"text-white-950":"text-gray-900 "} `}>
      
       <li className="xl:hover:underline xs:text-white ">
           Arduino Experiment 1
       </li>
       </NavLink> 
       
       <NavLink to="ex2" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment 2
       </li>
       </NavLink>
       <NavLink to="ex3" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment 3
       </li>
       </NavLink>
       <NavLink to="ex4" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment 4
       </li >
       </NavLink>
       <NavLink to="ex5" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       
       <li className="xl:hover:underline xs:text-white" >
           Arduino Experiment 5
       </li>
       </NavLink>
       <NavLink to="ex6" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment 6
       </li>
       </NavLink>
       <NavLink to="ex7" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline xs:text-white">
       Arduino Experiment 7
       </li>
       </NavLink>
       <NavLink to="ex8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white" >
           Arduino Experiment 8
       </li>
       </NavLink>
       <NavLink to="ex9" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white" >
           Arduino Experiment9
       </li>
       </NavLink>
       <NavLink to="ex10" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment10
       </li>
       </NavLink>
       <NavLink to="ex11" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment11
       </li>
       </NavLink>
       <NavLink to="ex12" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment12
       </li>
       </NavLink>
       <NavLink to="ex13" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment13
       </li>
       </NavLink>
       <NavLink to="ex14" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment14
       </li>
       </NavLink>
       <NavLink to="ex15" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment15
       </li>
       </NavLink>
       <NavLink to="ex16" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment16
       </li>
       </NavLink>
       <NavLink to="ex17"className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline xs:text-white">
       Arduino Experiment17
       </li>
       </NavLink>
       <NavLink to="ex18" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment18
       </li>
       </NavLink>
       <NavLink to="ex19" className={({isActive})=>`${isActive?"text-orange-900":"text-gray-900"}`} >
       <li className="xl:hover:underline xs:text-white">
           Arduino Experiment19
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