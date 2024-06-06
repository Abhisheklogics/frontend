
import React from "react";
import { useLoaderData } from "react-router-dom";
import CodeDemo from "../Code/Code";
let applyData;
export default function ArduinoAlag(props)
 {
   applyData= useLoaderData()
  
  
    

   return(
   <>
   
   <div className="xs:h-fit w-full xs:absolute xs:ml-0 xs:mt-32  xs:p-5 xs:bg-slate-50 xs:bg-cover
    xs:rounded-xs xl:leading-8 xs:text-justify xs:break-words
   xl:h-fit w-3/5 xl:absolute xl:ml-52 xl:mt-32  xl:p-5 xl:bg-slate-50 xl:bg-cover
    xl:rounded-xl xl:leading-8 xl:text-justify xl:break-words">
       <h1 className="xl:text-2xl xl:text-center xl:text-black-900">{applyData.ExperimentName}</h1>
       <img className="xl:h-60 xl:ml-36 xl:mt-6" src={applyData.image1}/> 
      <h2 className="  xl:text-gray-950 xl:mt-6">{applyData.madeBy}</h2>
     <p className="xl:text-wrap xl:leading-8 xl:mt-6">{applyData.madeByinfo}</p>
     <h2 className="xl:text-2xl xl:text-center xl:text-black-900 xl:mt-6" >{applyData.overview}</h2>
     <p  className="xl:text-wrap xl:leading-8 xl:mt-6">{applyData.overviewinfo}</p>

  <h3 >  Specifications </h3>
    
  
  <img  className="xl:h-96  xl:mt-6 xl:ml-10" src={applyData.image2} />
    
  
  

<h2 className="xl:text-2xl  xl:text-black-900 xl:mt-6">{applyData.
pinDiagramInfo}</h2>
<img className="xl:h-60  xl:mt-10 xl:ml-52 " src={applyData.image3}  />
<h2 className="xl:text-2xl xl: xl:text-black-900 xl:mt-6">{applyData.pinDiagramInfo}</h2>

<img className="xl:h-fit  xl:w-fit xl:mt-10 xl:ml-52 " src={applyData.image4}  />

<h2 className="xl:text-2xl  xl:text-black-900 xl:mt-6">{applyData.CircuitDiagramInfo}</h2>
<img className="xl:h-fit xl:mt-10 xl:ml-36" src={applyData.image5}/>




<h2 className="xl:text-2xl  xl:text-black-900 xl:mt-8" >Code:</h2>
<div style={{textWrap:"balance"}}>
    <CodeDemo code={props.code}/>
    </div>
   

<h3 className="text-2xl text-black-900 mt-6">Result</h3><p  className="text-wrap leading-8">{applyData.result}</p>
<hr className=" border-black mt-10"/>



      </div>
      
   
    </>
  
  ) 
 }
