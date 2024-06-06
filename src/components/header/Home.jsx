
 import React, { useState } from "react"
 import { NavLink ,useNavigate,useLoaderData} from "react-router-dom"

export default function Home()
{ 
  const images=useLoaderData()
       
    return(
      
        <>
     <div>

      <div className="  xs:bg:cover xs:flex xl:bg-cover xl:md
      ">
 <img className=" xs:bg-cover xs:absolute xs:w-fit xs:h-5/6 xs:top-28   
  xl:bg-cover xl:absolute xl:w-full xl:top-28 xl:h-5/6" src={images[0].image1}/>
</div>



<div className=" xs:bg-gray-700 xs:absolute xs:top-full xs:mt-0 xs:h-12 xs:w-full xs:text-white xs:p-1 xs:text-center
  xs:text-2xl xl:absolute xl:top-full xl:mt-3 xl:h-12 xl:w-full xl:bg-gray-700 xl:text-white xl:p-1 xl:text-center xl:text-2xl">
  <h1> Latest technology</h1>
</div>
<div className=" xs:bg-gray-200 xs:text-black xs:absolute xs:top-full xs:mt-10 xs:h-70 xs:w-full xs:border-black xs:border-solid xs:border-2
xs:flex xs:justify-evenly
xl:absolute xl:top-full xl:mt-16 xl:h-60 xl:w-full xl:border-black xl:border-solid xl:border-2 xl:flex xl:justify-evenly">
<div>
<NavLink to="Arduino">
<img className="
  xs:w-24 xs:h-fit xs:mt-8 xs:ml-1 xs:hover:shadow-2xl xs:cursor-pointer xs:rounded-xl
xl:h-32 xl:mt-2 xl:hover:shadow-2xl xl:cursor-pointer xl:rounded-xl" src={images[0].image3}/>
</NavLink>
<p className=" xs:text-sm xs:text-center xs:cursor-pointer xs:text-xl xs:hover:text-blue-900
xl:text-center xl:cursor-pointer xl:text-2xl xl:hover:text-blue-900">Arduino</p>
</div>
<div>
<NavLink to="raspberry">
<img className=" xs:w-24 xs:h-14 xs:mt-8 xs:ml-2  xs:hover:shadow-2xl xs:cursor-pointer xs:rounded-xl
xl:h-36 mt-2   xl:hover:shadow-2xl xl:cursor-pointer xl:rounded-xl" src={images[0].image4}/>
</NavLink>
<p className=" xs:text-sm  xs:text-center xs:cursor-pointer xs:text-xl xs:hover:text-blue-900
xl:text-center xl:cursor-pointer xl:text-2xl  xl:hover:text-blue-900">Raspberry Pi</p>
</div>
<div>
 <NavLink to="esp">
<img className="xs:w-24 xs:h-14 xs:mt-8 xs:hover:shadow-2xl xs:ml-1  xs:cursor-pointer xs:rounded-xl
xl:h-36 xl:mt-2 xl:hover:shadow-2xl xl:cursor-pointer xl:rounded-xl" src={images[0].image2}/>
</NavLink>
<p className="xs:text-sm  xs:text-center xs:cursor-pointer xs:text-xl xs:hover:text-blue-900
xl:text-center xl:cursor-pointer xl:text-2xl xl: hover:text-blue-900">Esp</p>
</div>
</div>

     </div>
           
          
            
           
            
          

            
        </>
        )
    
}

           /* <div className=" xl:bg-black xl:text-white  xl:absolute xl:top-full xl:mt-52 xl:w-full xl:border-black xl:border-solid xl:border-2
xl:flex xl:justify-evenly
">
        <h1 className="xl:text-2xl" >Tutrials</h1>
          <p className="xl:text-wrap xl:leading-8 xl:mt-6 xl:mr-0">Tutorials Point is a leading Ed Tech <br/>company striving to provide the best<br/> learning material on technical <br/>and  non-technical subjects.</p>
          <h1 className="xl:text-wrap xl:leading-8 xl:mt-6">About us
          <ul><li > Contact Us</li></ul>
          </h1 >
          <h1 className="xl:text-2xl">Address</h1>
          <p className="xl:text-wrap xl:leading-8 xl:mt-6">Tutorials Point India Private <br/>Limited, Incor9 Building, Kavuri Hills, Madhapur, <br/>Hyderabad, Telangana - 500081, INDIA</p>
            </div>    */