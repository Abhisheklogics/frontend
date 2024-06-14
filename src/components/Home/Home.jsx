
 import React ,{lazy,Suspense} from "react"
 import { NavLink ,useLoaderData} from "react-router-dom"
const Footer = lazy(()=>import('../Footer/Footer'))
export default function Home()
{ 
  const images=useLoaderData()
       console.log(window.innerHeight)
    return(
      
        <>
     <div className="xl:h-full  " >

      <div className=" xs:h-fit xs:w-fit  xs:bg:cover xs:flex xl:bg-cover xl:md
      ">
       
 <img className=" xs:bg-cover xs:absolute xs:top-28  xs:w-fit xs:h-fit  
  xl:bg-cover xl:absolute xl:w-full xl:top-28 xl:h-5/6" src={images[0].image1} />
    <marquee className=" xl:absolute xl:text-gray-700 xl:text-4xl xl:mt-96 xl:top-2/2"> Adhayanshala Presents</marquee>
  </div>




<div className="xl:shadow-lg xl:dark:bg-gray-800 xs:bg-gray-700 xs:absolute xs:top-1/3  xs:mt-16 xs:h-12 xs:w-full xs:text-white xs:p-1 xs:text-center
  xs:text-2xl xl:absolute xl:top-full xl:mt-3 xl:h-12 xl:w-full xl:bg-gray-700 xl:text-white xl:p-1 xl:text-center xl:text-2xl">
  <h1 className="xl:text-blue-400"> Latest technology</h1>
</div>
<div className=" xl:shadow-lg xl:dark:bg-gray-800 xs:bg-gray-300 xs:text-black xs:pb-4 xs:text-2xl xs:absolute xs:top-1/3  xs:mt-32 xs:h-fit xs:w-full xs:border-slate-600  xs:border-solid xs:border-2
xs:block 
xl:absolute xl:bg-gray-300 xl:top-full xl:mt-16 xl:h-1/3 xl:w-full xl:border-slate-600  xl:border-solid xl:border-2 xl:flex xl:justify-evenly xl:items-center">

<NavLink to="Arduino">
<div className="
xs:h-40  xs:rounded-xl xs:mt-4 xs:ml-16 xs:p-2 xs:w-72 xs:bg-white xs:hover:shadow-4xl xs:active:bg-gray-700 xs:active:text-white
xl:h-32 xl:p-1 xl:rounded xl:w-44 xl:bg-white xl:hover:shadow-2xl xl:active:bg-gray-700 xl:active:text-white">
<img className="
  xs:w-48  xs:h-24    xs:ml-10 xs:hover:shadow-2xl xs:cursor-pointer xs:rounded
xl:h-20 xl:w-28  xl:ml-6 xl:mt-2  xl:cursor-pointer  xl:rounded" src={images[0].image3}/>
<p className=" xs:text-xl xs:text-center xs:cursor-pointer xs:text-xl xs:hover:text-blue-900
xl:text-center xl:cursor-pointer xl:text-2xl xl:hover:text-blue-900">Arduino</p>
</div>
</NavLink>


 <NavLink to="raspberry">
  <div className="
  xs:h-40  xs:rounded-xl  xs:ml-16 xs:w-72 xs:mt-0 xs:bg-white xs:hover:shadow-2xl xs:active:bg-gray-700 xs:active:text-white
  xl:h-32  xl:rounded  xl:p-1 xl:w-44 xl:bg-white xl:hover:shadow-2xl xl:active:bg-gray-700 xl:active:text-white ">
  <img className=" xs:w-52  xs:h-28 xs:p-2 xs:mt-3 xs:ml-10  xs:hover:shadow-4xl xs:cursor-pointer xs:rounded
xl:h-20  xl:ml-6 xl:mt-2 xl:w-28 xl:hover:shadow-2xl xl:cursor-pointer xl:rounded " src={images[0].image4}/>
 <p className=" xs:text-sm  xs:text-center xs:cursor-pointer xs:text-xl xs:hover:text-blue-900
xl:text-center xl:cursor-pointer xl:text-2xl  xl:hover:text-blue-900">Raspberry Pi</p></div>
</NavLink>



 <NavLink to="esp">
 <div className="
xs:h-40  xs:rounded xs:mt-4 xs:mr-30 xs:p-2 xs:ml-20 xs:w-72 xs:bg-white xs:hover:shadow-2xl xs:active:bg-gray-700 xs:active:text-white
 xl:h-32 xl:p-1 xl:rounded xl:w-44 xl:bg-white xl:hover:shadow-2xl xl:active:bg-gray-700 xl:active:text-white">
<img className="xs:w-48  xs:h-24    xs:hover:shadow-2xl xs:ml-8 xs:cursor-pointer xs:rounded
xl:h-20  xl:w-28 xl:ml-7 xl:mt-2 xl:hover:shadow-2xl xl:cursor-pointer xl:rounded" src={images[0].image2}/>
<p className="xs:text-sm  xs:text-center xs:cursor-pointer xs:text-xl xs:hover:text-blue-900
xl:text-center xl:cursor-pointer xl:text-2xl xl: hover:text-blue-900">Esp</p>
</div>

</NavLink>

</div>
<Suspense fallback={<h1></h1>}>
<Footer/>
</Suspense>
     </div>
           
          
            
           
            
          

            
        </>
        )
    
}

           /*  */