import React ,{useState} from "react";
import { NavLink, Outlet } from "react-router-dom";



export default function Arduino()
{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
   
    return(
        <>
<<<<<<< HEAD
       <div className="xs:flex xs:h-screen xl:hidden">
      <div className="xs:p-4">
        <div className="xs:text-3xl xs:mt-28 xs:cursor-pointer" onClick={toggleSidebar}>
          &#9776; {/* Hamburger icon */}
        </div>
      </div>
      <div
        className={`xs:absolute xs:z-10 xs:top-36 xs:left-0 xs:h-full xs:bg-gray-800 xs:text-white xs:w-64 xs:transform ${
          isSidebarOpen ? 'xs:translate-x-0' : 'xs:-translate-x-full'
        } xs:transition-transform xs:duration-300 p-6`}
      >
        <div className="xs:text-3xl xs:cursor-pointer xs:absolute xs:top-4 xs:right-4" onClick={toggleSidebar}>
          &times; {/* Close icon */}
        </div>
        <div className="ml-4 p-4 flex-grow">
       
 
       <ul className="">
      
      <NavLink to="ex1" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900 "}`}>
      
       <li className="xl:hover:underline">
           Arduino Experiment 1
       </li>
       </NavLink> 
       
       <NavLink to="ex2" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
       <li className="xl:hover:underline">
           Arduino Experiment 2
       </li>
       </NavLink>
       <NavLink to="ex3" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline">
           Arduino Experiment 3
       </li>
       </NavLink>
       <NavLink to="ex4" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline">
           Arduino Experiment 4
       </li >
       </NavLink>
       <NavLink to="ex5" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       
       <li className="xl:hover:underline" >
           Arduino Experiment 5
       </li>
       </NavLink>
       <NavLink to="ex6" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline">
           Arduino Experiment 6
       </li>
       </NavLink>
       <NavLink to="ex7" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
       <li className="xl:hover:underline">
       Arduino Experiment 7
       </li>
       </NavLink>
       <NavLink to="ex8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline" >
           Arduino Experiment 8
       </li>
       </NavLink>
       <NavLink to="ex9" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
       <li className="xl:hover:underline " >
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
      </div>
     
    
      </div>
      
    
       <div className=" xs:h-10  xs:bg-white xs:hover:underline  xs:hidden  xs:overflow-scroll xs:justify-evenly xs:p-2 xs:mt-1 xs:mt-28  xs:w-full xs:flex xs:absolute   
=======
       <div className=" xs:h-20   xs:w-80 xs:text-white  xs:bg-white xs:overflow-auto xs:flex-wrap xs:flex-1
        xs:flex-row xs:justify-evenly xs:mt-32  xs:w-full  xs:absolute   
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
     xl:block xl:absolute xl:mt-28 xl:p-2 xl:m-1 " >
       <ul className="   xs:p-2 xs:text-2xl  
       xl:p-1 xl:m-1 xl:text-blue-400">
       
<<<<<<< HEAD
       <NavLink to="ex1" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900 "}`}>
       
        <li className="xl:hover:underline">
=======
       <NavLink to="ex1" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
       <li className="xl:hidden  ">
          Experiment:1
        </li>
        <li className="xs:hidden ">
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
            Arduino Experiment 1
        </li>
        </NavLink> 
        
        <NavLink to="ex2" className={({isActive})=>`${isActive?"text-red-950":"text-gray-900"}`}>
<<<<<<< HEAD
        <li className="xl:hover:underline">
=======
        <li className="xl:hidden ">
          Experiment:2
        </li>
        <li className="xs:hidden">
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
            Arduino Experiment 2
        </li>
        </NavLink>
        <NavLink to="ex3" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
<<<<<<< HEAD
        <li className="xl:hover:underline">
=======
        <li className="xl:hidden ">
          Experiment:3
        </li>
        <li className="xs:hidden">
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
            Arduino Experiment 3
        </li>
        </NavLink>
        <NavLink to="ex4" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
<<<<<<< HEAD
        <li className="xl:hover:underline">
=======
        <li className="xl:hidden ">
          Experiment:4
        </li>
        <li className="xs:hidden" >
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
            Arduino Experiment 4
        </li >
        </NavLink>
        <NavLink to="ex5" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
<<<<<<< HEAD
        
        <li className="xl:hover:underline" >
=======

        <li className="xl:hidden ">
          Experiment:5
        </li>        
        <li className="xs:hidden">
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
            Arduino Experiment 5
        </li>
        </NavLink>
        <NavLink to="ex6" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
<<<<<<< HEAD
        <li className="xl:hover:underline">
=======
        <li className="xl:hidden ">
          Experiment:6
        </li>
        <li className="xs:hidden">
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
            Arduino Experiment 6
        </li>
        </NavLink>
        <NavLink to="ex7" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`} >
<<<<<<< HEAD
        <li className="xl:hover:underline">
=======
        <li className="xl:hidden ">
          Experiment:7
        </li>
        <li  className="xs:hidden">
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
        Arduino Experiment 7
        </li>
        </NavLink>
        <NavLink to="ex8" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
<<<<<<< HEAD
        <li className="xl:hover:underline" >
=======
        <li className="xl:hidden ">
          Experiment:8
        </li>
        <li className="xs:hidden">
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
            Arduino Experiment 8
        </li>
        </NavLink>
        <NavLink to="ex9" className={({isActive})=>`${isActive?"text-red-900":"text-gray-900"}`}>
<<<<<<< HEAD
        <li className="xl:hover:underline " >
=======
        <li className="xl:hidden ">
          Experiment:9
        </li>
        <li className="xs:hidden">
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
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