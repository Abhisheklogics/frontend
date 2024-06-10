
import React from "react";

import { useLoaderData } from "react-router-dom";
const CodeDemo =React.lazy(()=>import('../Code/Code')) 
 export default function ResAllExperiment(props)
 {
  let data= useLoaderData()
 
   
  return(
    <>
     <>
    <div className="xs:h-fit xs:w-full xs:absolute xs:ml-0 xs:mt-32 
    xs:p-5 xs:bg-slate-50 xs:bg-cover xs:rounded-xl xs:leading-8 xs:text-justify xs:break-words xs:text-wrap
    xl:h-fit xl:w-3/5 xl:absolute xl:ml-52 xl:mt-32 
    xl:p-5 xl:bg-slate-50 xl:bg-cover xl:rounded-xl xl:leading-8 xl:text-justify xl:break-words xl:text-wrap">
      
        <h1 className="xs:text-3xl  xs:text-black-900
        xl:text-2xl xl:text-center xl:text-black-900">
         {data.ExperimentName}
        </h1>
        <img className="xs:h-48 xs:w-72 xs:ml-10   xs:mt-6
        xl:h-60 xl:w-1/2 xl:ml-44 xl:mt-6 " src={data.image1} />
        <h1 className=" xs:text-gray-950 xs:mt-6 xs:text-2xl
         xl:text-gray-950 xl:mt-6">
         {data.madeBy }
        </h1>
        <p className="xs:text-wrap xs:leading-8 xs:mt-6
        xl:text-wrap xl:leading-8 xl:mt-6">
         {data.madeByinfo}
        </p>
        <h1 className="xs:text-3xl  xs:text-black-900 xs:mt-6
        xl:text-2xl xl:text-center xl:text-black-900 xl:mt-6">
       {data.overview}
       </h1>
        <p className="xs:text-wrap xs:leading-8 xs:mt-6
        xl:text-wrap xl:leading-8 xl:mt-6">
         {data.overviewinfo}
        </p>
        <h1 className="  xs:text-gray-950 xs:mt-6 xs:text-2xl
        xl:text-gray-950 xl:mt-6 xl:text-2xl ">
         {data.Material}
        </h1>
        {data.Material1? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
      xl:text-wrap xl:leading-8 xl:mt-6 " > 1: {data.Material1} </p>:''}
      
      {data.Material2? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
      xl:text-wrap xl:leading-8 xl:mt-6 " > 2: {data.Material2} </p>:''}
      
      {data.Material3? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
      xl:text-wrap xl:leading-8 xl:mt-6 " > 3: {data.Material3} </p>:''}
      
      
        {data.Material4? <p className="xs:text-wrap xs:leading-7 xs:mt-6 xs:words-break
      xl:text-wrap xl:leading-8 xl:mt-6 " > 4: {data.Material4} </p>:''}
      
    
        <img src={data.image2}className="xs:h-fit xs:w-fit xs:mt-6 xs:ml-0
        
       xl: h-fit xl:w-fit  xl:mt-6 xl:ml-20 xl:rounded-xl " 
         />
         <h1 className="xs:text-3xl  xs:text-black-900 xs:mt-6
        xl:text-2xl  xl:text-black-900 xl:mt-6"> {data.
pinDiagramInfo}</h1>
      < img  className="xs:h-fit xs:w-fit  xs:mt-10 xs:ml-2
xl:h-fit xl:w-fit xl:mt-10 xl:ml-20 xl:rounded-xl "src={data.image3}/>
<h1 className="xs:text-3xl  xs:text-black-900 xs:mt-6
xl:text-2xl  xl:text-black-900 xl:mt-6 ">{data.CircuitDiagramInfo}</h1>
<img className="xs:h-fit xs:w-fit xs:mt-10 xs:ml-4 
xl:h-60  xl:mt-10 xl:ml-36  xl:rounded-xl" src={data.image4}/>
       

<h1 className="xs:text-3xl  xs:text-black-900 xs:mt-8
xl:text-2xl  xl:text-black-900 xs:mt-8">Steps</h1>
{data.step1? <p className="xs:text-wrap xs:leading-8 xs:mt-6
xl:text-wrap xl:leading-8 xl:mt-6">1:  { data.step1}</p>:''}
{data.step2? <p className="xs:text-wrap xs:leading-8 xs:mt-6
xl:text-wrap xl:leading-8 xl:mt-6">2:  { data.step2}</p>:''}
{data.step3? <p className="xs:text-wrap xs:leading-8 xs:mt-6
xl:text-wrap xl:leading-8 xl:mt-6">3:  { data.step3}</p>:''}
{data.step4? <p className="xs:text-wrap xs:leading-8 xs:mt-6
xl:text-wrap xl:leading-8 xl:mt-6">4:  { data.step4}</p>:''}
{data.step5? <p className="xs:text-wrap xs:leading-8 xs:mt-6
xl:text-wrap xl:leading-8 xl:mt-6">5:  { data.step5}</p>:''}
{data.step6? <p className="xs:text-wrap xs:leading-8 xs:mt-6
xl:text-wrap xl:leading-8 xl:mt-6">6:  { data.step6}</p>:''}
{data.step7? <p className="xs:text-wrap xs:leading-8 xs:mt-6
xl:text-wrap xl:leading-8 xl:mt-6">7:  { data.step7}</p>:''}
<h1 className="xs:text-wrap xs:leading-8  xs:text-3xl xs:mt-6
xl:text-2xl  xl:text-black-900 xl:mt-8">Code:</h1>
<div >
<CodeDemo code={props.code}/>
    </div>
<h1  className="xs:text-3xl xs:text-black-900 xs:mt-6
xl:text-2xl xl:text-black-900 xl:mt-6">Result:</h1>
<p className="xs:text-wrap xs:leading-8 xs:mt-2
xl:text-wrap xl:leading-8">{data.result}</p>
<hr className=" xs:border-black xs:mt-10
xl:border-black xl:mt-10"/>
    </div>
    </>
    </>
  )
 }

  /*  <h1 className="text-wrap leading-8 mt-6 text-2xl">Specification</h1>
        <img src={data.image2} className="h-72 mt-6 ml-10 rounded" />
   <img src={data.image2} className="h-72 mt-6 ml-10 rounded" />
        < img  className="h-72 mt-10 ml-10 rounded "src={data.image3}/>
        <h1 className="text-2xl text-black-900 mt-6"> {data.
pinDiagramInfo}</h1>
< img  className="h-40  mt-10 ml-52  rounded-xl "src={data.image4}/>
<h1 className="text-2xl  text-black-900 mt-6">{data.CircuitDiagramInfo}</h1>
<img className="h-40  mt-10 ml-52 rounded-xl " src={data.image5}/>*/ 

/*    <h1 className="text-2xl text-center text-black-900 mt-6"> {data.
pinDiagramInfo}</h1>
< img  className="h-40  mt-10 ml-52 "src={data.image2}/>
<h1 className="text-2xl text-center text-black-900 mt-6">{data.CircuitDiagramInfo}</h1>
<img className="h-40  mt-10 ml-52 " src={data.image3}/>*/