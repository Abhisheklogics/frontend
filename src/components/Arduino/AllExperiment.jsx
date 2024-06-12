
import React,{lazy,Suspense} from "react";

import { useLoaderData} from "react-router-dom";






const CodeDemo = lazy(()=>import("../Code/Code"))
let applyData;
 export default function AllExperiment(props)
 {
   applyData= useLoaderData()
   console.log(applyData)

   return(
   <>
    

   

    <div className="xs:h-fit  xs:w-full xs:absolute xs:subpixel-antialiased xs:ml-0 xs:mt-44 xs:top-0 xs:p-5 xs:bg-slate-50 xs:bg-cover xs:rounded-xl xs:leading-9 xs:text-justify xs:break-words

   
    xl:h-fit xl:w-3/5 xl:absolute xl:ml-52 xl:mt-32 xl:top-0  xl:p-5 xl:bg-slate-50 xl:bg-cover xl:rounded-xl xl:leading-8 xl:text-justify xl:break-words">
       <h1 className="xs:text-3xl  xs:text-black-900
       xl:text-2xl xl:text-center xl:text-black-900">{applyData.ExperimentName}</h1>
       <img className="xs:h-40 xs:w-72 xs:ml-10 xs:mt-6
       xl:h-60 xl:w-96 xl:ml-36 xl:mt-6" src={applyData.image1}/> 
      <h2 className=" xs:text-gray-950 xs:text-2xl xs:mt-6
       xl:text-gray-950 xl:mt-6">{applyData.madeBy}</h2>
     <p className="xs:text-wrap   xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6">{applyData.madeByinfo}</p>
     <h2 className="xs:text-3xl xs:text-black-900 xs:mt-6
     xl:text-2xl xl:text-center xl:text-black-900 xl:mt-6" >{applyData.overview}</h2>
     <p  className="xs:text-wrap  xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6">{applyData.overviewinfo}</p>

  
    
  <h1 className="xs:text-3xl xl:text-2xl">Specifications</h1>
  <div className=" xl:ml-10 xl:h-fit  xl:w-fit  xl:bg-black">
  <img  className="xs:h-fit xs:w-fit xs:w-full xs:mt-6 xs:ml-0
  xl:h-fit xl:w-96 xl:mt-6 xl:ml-0 " src={applyData.image2} />
    </div>
  
  

<h2 className="xs:text-3xl  xs:text-black-900 xs:mt-6
xl:text-2xl  xl:text-black-900 xl:mt-6">{applyData.
pinDiagramInfo}</h2>
<img className="xs:h-44 xs:w-72 xs:mt-10 xs:ml-8
xl:h-fit  xl:mt-10 xl:ml-44 xl:rounded-xl  " src={applyData.image3}  />
<h2 className="xs:text-3xl  xs:text-black-900 xs:mt-6
xl:text-2xl xl:text-black-900 xl:mt-6">{applyData.CircuitDiagramInfo}</h2>
<img className="xs:h-52 xs:w-72 xs:mt-10 xs:ml-8
xl:h-fit xl:mt-10 xl:ml-40  xl:rounded-xl" src={applyData.image4}/>
<h1 className="xs:text-2xl  xs:text-black-900 xs:mt-6
xl:text-2xl  xl:text-black-900 xl:mt-6"> Steps:</h1>

<div > 
<p  className="xs:text-wrap  xs:text-3xl xs:leading-8 xs:mt-6 
xl:text-wrap xl:leading-8 xl:mt-6">{applyData.step}</p>
{ applyData.step1? <p  className="xs:text-wrap xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6 xl:ml-10"> 1: {applyData.step1}</p>:''

  }
  { applyData.step2? <p  className="xs:text-wrap xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6 xl:ml-10"> 2: {applyData.step2}</p>:''

  }
  { applyData.step3? <p  className="xs:text-wrap xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6 xl:ml-10"> 3: {applyData.step3}</p>:''

  }
  { applyData.step4? <p  className="xs:text-wrap xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6 xl:ml-10"> 4:{applyData.step4}</p>:''

  }
  { applyData.step5? <p  className="xs:text-wrap xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6 xl:ml-10"> 5: {applyData.step5}</p>:''

  }
  { applyData.step6? <p  className="xs:text-wrap xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6 xl:ml-10"> 6: {applyData.step6}</p>:''

  }
</div>


<h2 className="xs:text-3xl  xs:text-black-900 xs:mt-8
xl:text-2xl  xl:text-black-900 xl:mt-8" >Code:</h2>
<div >
      
<Suspense fallback={<h1>Code is Loading</h1>}>    
        <CodeDemo code={props.code}/>
        </Suspense>
      
    </div>
   

<h3 className="xs:text-3xl xs:text-black-900 xs:mt-8
xl:text-2xl xl:text-black-900 xl:mt-6">Result</h3><p  className="xl:text-wrap xl:leading-8 xs:mt-2">{applyData.result}</p>
<hr className=" xs:border-black xs:mt-10
xl:border-black xl:mt-10"/>



      </div>
      
    
    </>
  
  ) 
 }
 
  
 /* import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Component = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};*/ 
