import React,{lazy,Suspense} from "react";
import { useLoaderData } from "react-router-dom";
<<<<<<< HEAD
const CodeDemo = lazy(()=>import("../Code/Code"))
=======
const CodeDemo =React.lazy(()=>import('../Code/Code')) 
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
let applyData
export default function ArduinoOne5(props)
 {
  applyData= useLoaderData()

    

   return(
   <>
<<<<<<< HEAD
   <div className="xs:h-fit xs:w-full xs:absolute xs:left-0  xs:ml-0 xs:mt-44  xs:p-5 xs:bg-slate-50 xs:bg-cover xs:rounded-xl xs:leading-9 xs:text-justify xs:break-words
=======
   <div className="xs:h-fit xs:w-full xs:absolute xs:ml-0 xs:mt-72  xs:p-5 xs:bg-slate-50 xs:bg-cover xs:rounded-xl xs:leading-9 xs:text-justify xs:break-words
>>>>>>> 662863fe32fc5518d1df360eecc418487093dacd
    xl:h-fit xl:w-3/5 xl:absolute xl:ml-52 xl:mt-32  xl:p-5 xl:bg-slate-50 xl:bg-cover xl:rounded-xl xl:leading-8 xl:text-justify xl:break-words">
       <h1 className="xs:text-2xl  xs:text-black-900
       xl:text-2xl xl:text-center xl:text-black-900">{applyData.ExperimentName}</h1>
       <img className="xs:h-44  xs:mt-6
       xl:h-60 xl:ml-36 xl:mt-6" src={applyData.image1}/> 
      <h2 className=" xs:text-gray-950 xs:mt-6
       xl:text-gray-950 xl:mt-6">{applyData.madeBy}</h2>
     <p className="xs:text-wrap xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6">{applyData.madeByinfo}</p>
     <h2 className="xs:text-2xl xs:text-black-900 xs:mt-6
     xl:text-2xl xl:text-center xl:text-black-900 xl:mt-6" >{applyData.overview}</h2>
     <p  className="xs:text-wrap xs:leading-8 xs:mt-6
     xl:text-wrap xl:leading-8 xl:mt-6">{applyData.overviewinfo}</p>

  <h3 >  Specifications </h3>
    
  
  <img  className="xl:h-fit xl:mt-6 xl:ml-10" src={applyData.image2} />
    
  
  

<h2 className="xs:text-2xl  xs:text-black-900 xs:mt-6
xl:text-2xl  xl:text-black-900 xl:mt-6">{applyData.
pinDiagramInfo}</h2>
<img className="xl:h-52 xl:mt-10 xl:ml-52 " src={applyData.image3}  />
<h2 className="xs:text-2xl  xs:text-black-900 xs:mt-6
xl:text-2xl  xl:text-black-900 xl:mt-6">{applyData.
pinDiagramInfo2}</h2>
<img className="xl:h-fit  xl:mt-10 xl:ml-20 " src={applyData.image4}  />
<h2 className="xs:text-2xl  xs:text-black-900 xs:mt-6
xl:text-2xl  xl:text-black-900 xl:mt-6">{applyData.CircuitDiagramInfo}</h2>
<img className="xs:h-fit xs:mt-10 xs:ml-0
xl:h-fit xl:mt-10 xl:ml-36" src={applyData.image5}/>
<h1 className="xs:text-2xl  xs:text-black-900 xs:mt-6
xl:text-2xl  xl:text-black-900 xl:mt-6"> Steps:</h1>
<div > 
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


<h2 className="xs:text-2xl  xs:text-black-900 xs:mt-8
xl:text-2xl  xl:text-black-900 xl:mt-8" >Code:</h2>
<div >
      <Suspense fallback={<h1>Code is Loading</h1>}>    
        <CodeDemo code={props.code}/>
        </Suspense>
    </div>
   

<h3 className="xs:text-2xl xs:text-black-900 xs:mt-6
xl:text-2xl xl:text-black-900 xl:mt-6">Result</h3><p  className="xl:text-wrap xl:leading-8">{applyData.result}</p>
<hr className=" xs:border-black xs:mt-10
xl:border-black xl:mt-10"/>



      </div>
      
    
   
    </>
  
  ) 
 }

  /*<div style={{position:'absolute',top:'130px','left':'270px','height':'3600px',borderRadius:'5px',
    'width':'800px','backgroundColor':'white',padding:'20px',textAlign:'justify'}}>
      <h1 style={{textAlign:'center',color:'#89aae8'}}>{applyData.ExperimentName}</h1>
       <img height={300} width={500} style={ {marginLeft:'100px',boxShadow:'1px 2px 2px white'}}src={applyData.image1}/> 
      <h2 style={{color:'#89aae8'}}>{applyData.madeBy}</h2>
     <p style={{fontSize:'17px',textAlign:'justify',lineHeight:'30px'}}>{applyData.madeByinfo}</p>
     <h2 style={{color:'#89aae8',textAlign:'justify'}}>{applyData.overview}</h2>
     <p style={{color:'black',textAlign:'justify',lineHeight:'30px'}}>{applyData.overviewinfo}</p>
     <h3 >  Specifications </h3>
     <img src={applyData.image2}/>
     

 
 <h2 style={{color:'black',}}>{applyData.pinDiagramInfo}</h2>
<img  style={{marginLeft:"200px"}}height="300px" width="300px"src={applyData.
image3
}/>
<h1>{applyData.pinDiagramInfo2}</h1>
<img src={applyData.image4} height={300} width={300}/>
<h2 style={{color:'black'}}>{
applyData.CircuitDiagramInfo}</h2>
<img src={applyData.image5} height={200} width={400}/>

<h2 style={{color:'#89aae8'}}> Steps:</h2>
<div style={{height:'200px',width:'800px'}}> 
<p style={{padding:'10px' ,wordSpacing:'10px',lineHeight:'30px',lineBreak:'anywhere'}}>{applyData.steps}</p>
</div>


<h2 style={{marginTop:'50px',color:'black'}}>Code:</h2>
<input style={{fontSize:'17px',letterSpacing:'2px',height:'200px',width:'300px',}} value={applyData.code}/>

<div style={{marginTop:'200px'}}>
<h3 style={{color:'#89aae8'}}>Result</h3><p  style={{fontSize:'20px'}}>{applyData.result}</p>
</div>
<hr style={{marginTop:'200px',caretShape:'bar'}}/>
<button style={{backgroundColor:'#0c597a',height:'40px' ,position:'absolute',left:'700px', color:'white',
 width:'100px',borderRadius:'10px',fontSize:'17px'
}}>Next</button>
<button  style={{backgroundColor:'#0c597a',height:'40px' ,position:'absolute',left:'40px',color:'white',
 width:'100px',borderRadius:'10px',fontSize:'17px'
}}>Back</button>
     
    
      </div>
     */