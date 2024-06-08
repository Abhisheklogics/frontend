
 import React from "react"
 import { NavLink ,useLoaderData} from "react-router-dom"

export default function Home()
{ 
  const images=useLoaderData()
       console.log(window.innerHeight)
    return(
      
        <>
     <div className=" " >

      <div className=" xs:h-fit xs:w-fit  xs:bg:cover xs:flex xl:bg-cover xl:md
      ">
       
 <img className=" xs:bg-cover xs:absolute xs:top-28  xs:w-fit xs:h-fit  
  xl:bg-cover xl:absolute xl:w-full xl:top-28 xl:h-5/6" src={images[0].image1} />
  </div>




<div className=" xs:bg-gray-700 xs:absolute xs:top-1/3  xs:mt-20 xs:h-12 xs:w-full xs:text-white xs:p-1 xs:text-center
  xs:text-2xl xl:absolute xl:top-full xl:mt-3 xl:h-12 xl:w-full xl:bg-gray-700 xl:text-white xl:p-1 xl:text-center xl:text-2xl">
  <h1> Latest technology</h1>
</div>
<div className=" xs:bg-gray-200 xs:text-black xs:absolute xs:top-1/3  xs:mt-36 xs:h-fit xs:w-full xs:border-slate-600  xs:border-solid xs:border-2
xs:flex xs:justify-evenly xs:items-center
xl:absolute xl:top-full xl:mt-16 xl:h-1/3 xl:w-full xl:border-slate-600  xl:border-solid xl:border-2 xl:flex xl:justify-evenly xl:items-center">
<div>
<NavLink to="Arduino">
<img className="
  xs:w-28  xs:h-18 xs:mt-8 xs:ml-1 xs:hover:shadow-2xl xs:cursor-pointer xs:rounded-xl
xl:h-32 xl:mt-2 xl:hover:shadow-2xl xl:cursor-pointer xl:rounded-xl" src={images[0].image3}/>
</NavLink>
<p className=" xs:text-sm xs:text-center xs:cursor-pointer xs:text-xl xs:hover:text-blue-900
xl:text-center xl:cursor-pointer xl:text-2xl xl:hover:text-blue-900">Arduino</p>
</div>
<div>
<NavLink to="raspberry">
<img className=" xs:w-24  xs:h-14 xs:mt-8 xs:ml-2  xs:hover:shadow-2xl xs:cursor-pointer xs:rounded-xl
xl:h-32 mt-2 xl:w-56  xl:hover:shadow-2xl xl:cursor-pointer xl:rounded-xl" src={images[0].image4}/>
</NavLink>
<p className=" xs:text-sm  xs:text-center xs:cursor-pointer xs:text-xl xs:hover:text-blue-900
xl:text-center xl:cursor-pointer xl:text-2xl  xl:hover:text-blue-900">Raspberry Pi</p>
</div>
<div>
 <NavLink to="esp">
<img className="xs:w-24 xs:h-14  xs:scroll-smooth xs:mt-8 xs:hover:shadow-2xl xs:ml-1  xs:cursor-pointer xs:rounded-xl
xl:h-32 xl:w-56 xl:mt-2 xl:hover:shadow-2xl xl:cursor-pointer xl:rounded-xl" src={images[0].image2}/>
</NavLink>
<p className="xs:text-sm  xs:text-center xs:cursor-pointer xs:text-xl xs:hover:text-blue-900
xl:text-center xl:cursor-pointer xl:text-2xl xl: hover:text-blue-900">Esp</p>
</div>
</div>
<div className=" xs:bg-gray-900 xs:text-white xs:absolute xs:top-2/3 xs:p-2 xs:mt-6 xs:h-fit xs:w-full xs:border-slate-600  xs:border-solid xs:border-2
xs:flex xs:justify-evenly xs:items-center
xl:absolute xl:top-2/3  xl:hidden  xl:mt-full xl:h-1/3 xl:w-full xl:border-slate-600  xl:border-solid xl:border-2 xl:flex xl:justify-evenly xl:items-center">
<h1 className="xs:text-2xl">
  website Overveiw
<p className="xs:text-xl">
The best technical 
Learning website
to provide the best learning material on 
technical 
</p>
</h1>
<h1 className="xs:mb-56 xs:text-2xl xs:ml-10">
About Us
<p className="xs:text-xl">
  <NavLink to="contact">

  </NavLink>
contact Us
</p>
</h1>
<h1 className="xs:mb-14 xs:text-2xl xs:ml-10">
Address
  <p className="xs:text-xl">
  
  
 
  </p>

</h1>

</div>
     </div>
           
          
            
           
            
          

            
        </>
        )
    
}

           /*  */