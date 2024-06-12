
import React ,{lazy,Suspense} from "react";
import { useLoaderData } from "react-router-dom";
const CodeDemo = lazy(()=>import("../Code/Code"))

let applyData;
export default function Arduino6(props)
 {
   applyData= useLoaderData()
  
    

   return(
    <>
        <div className="xs:h-fit xs:w-full xs:absolute xs:ml-0 xs:mt-44  xs:p-5 xs:bg-slate-50 xs:bg-cover xs:rounded-xl xs:leading-9 xs:text-justify xs:break-words
    xl:h-fit xl:w-3/5 xl:absolute xl:ml-52 xl:mt-32  xl:p-5 xl:bg-slate-50 xl:bg-cover xl:rounded-xl xl:leading-8 xl:text-justify xl:break-words">
       <h1 className="xs:text-3xl  xs:text-black-900
       xl:text-2xl xl:text-center xl:text-black-900">{applyData.ExperimentName}</h1>
       <img className="xs:h-44  xs:mt-6 xs:ml-4
       xl:h-60 xl:ml-36 xl:mt-6" src={applyData.image1}/> 
      <h2 className=" xs:text-gray-950 xs:mt-6
       xl:text-gray-950 xl:mt-6">{applyData.madeBy}</h2>
     <p className="xs:text-wrap xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6">{applyData.madeByinfo}</p>
     <h2 className="xs:text-3xl  xs:text-black-900 xs:mt-6
     xl:text-2xl xl:text-center xl:text-black-900 xl:mt-6" >{applyData.overview}</h2>
     <p  className="xs:text-wrap xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6">{applyData.overviewinfo}</p>
     <h1 className="xs:text-gray-950 xs:text-2xl xs:mt-6
     xl:text-gray-950  xl:text-2xl xl:mt-6">Ultrasonic Pin configuration</h1>
<p className=" xl:text-wrap xl:leading-8 xl:mt-6">{applyData.HC}</p><img className="xl:h-72 xl:mt-10 xl:w-80
xl:h-44 xl:mt-10 xl:ml-44" src={applyData.image5}/>

<h1 className="xs:text-gray-950 xs:text-2xl xs:mt-6
xl:text-gray-950 xl:text-2xl xl:mt-6 "> Basic working principal</h1>
<p className=" xl:text-wrap xl:leading-8 xl:mt-6 xs:mt-2"> {applyData.working}</p>
  <h1 className="xl:text-2xl  xl:text-black xl:mt-6 ">  Specifications </h1>
    
  
  <img  className="xs:h-60  xs:w-full xs:mt-6  xs:w-62
  xl:h-60  xl:w-96 xl:mt-6 xl:ml-36" src={applyData.image2} />
    
  <h2 className="xs:text-3xl  xs:text-black-900 xs:mt-6
  xl:text-2xl  xl:text-black-900 xl:mt-6">{applyData.
pinDiagramInfo} :</h2>
<img className="xs:h-60 xs:w-72 xs:mt-10 xs:ml-10
xl:h-48 xl:w-72 xl:mt-10 xl:ml-52 " src={applyData.image3}  />
<h2 className="xs:text-3xl  xs:text-black-900 xs:mt-6
xl:text-2xl  xl:text-black-900 xl:mt-6">{applyData.pinDiagramInfo2} :</h2>

<img className="xs:h-60 xs:w-72  xs:mt-10  xs:ml-10 xs:w-60
xl:h-48 xl:w-72  xs:mt-10  xs:w-60 
xl:h-40  xl:mt-10 xl:ml-52 " src={applyData.image4}  />

<h2 className="xs:text-3xl  xs:text-black-900 xs:mt-6
xl:text-2xl  xl:text-black-900 xl:mt-6">{applyData.CircuitDiagramInfo} </h2>
<img  className=" xs:h-40 xs:ml-0 xs:mt-6
xl:h-48 xl:ml-36 xl:mt-6"src={applyData.image6}/>
<h2 className="xs:text-2xl  xs:text-black-900 xs:mt-8
xl:text-2xl  xl:text-black-900 xl:mt-8" >Code:</h2>
<Suspense fallback={<h1>Code is Loading</h1>}>    
        <CodeDemo code={props.code}/>
        </Suspense>
<h3 className="xs:text-3xl xs:text-black-900 xs:mt-6
xl:text-2xl xl:text-black-900 xl:mt-6">Result</h3><p  className="xs:text-wrap xs:leading-8 xs:mt-4
xl:text-wrap xl:leading-8">{applyData.result}</p>
<hr className=" xs:border-black xs:mt-10
xl:border-black xl:mt-10"/>



      </div>
      
    
    
    </>
   
  ) 
 }

 
 