import react, { useState,useEffect } from "react"
import axios from "axios"
export default function Form()
{
let [ExperimentId,setExperimentId]=useState()
let [ExperimentName,setExperimentName]=useState('')
let [madeBy,setmadeBy]=useState('')
let [madeByinfo,setmadeByinfo]=useState('')
let [overview,setOverview]=useState('')   
let [overviewinfo,setOverviewinfo]=useState('') 
let [working,setworking]=useState('')
let [HC,setHC]=useState('')
let [pinDiagramInfo,setpinDiagramInfo]=useState('')
let [pinDiagramInfo2,setpinDiagramInfo2]=useState('')
let [CircuitDiagramInfo,setCircuitDiagramInfo]=useState('')


 
 
let [ code,setcode]=useState('')
let [result,setResult]=useState('')
let  [image1,setimage1]=useState([])
let  [image2,setimage2]=useState([])
let  [image3,setimage3]=useState([])
let  [image4,setimage4]=useState([])

let  [image5,setimage5]=useState([])
let  [image6,setimage6]=useState([])


let hendledata
let form=new FormData()
useEffect(()=>{

hendledata=async(e)=>{
 e.preventDefault()
 form.append('ExperimentId',ExperimentId)
 form.append('ExperimentName',ExperimentName)
 form.append('madeBy',madeBy)
 form.append('madeByinfo',madeByinfo)
 form.append('overview',overview)
 form.append('overviewinfo',overviewinfo)
 form.append('HC',HC)
 form.append('working',working)
 form.append('pinDiagramInfo',pinDiagramInfo) 
 form.append('pinDiagramInfo2',pinDiagramInfo2)
 form.append('CircuitDiagramInfo',CircuitDiagramInfo) 
 
 

 form.append('code',code)
 form.append('result',result)
 form.append('image1',image1)
 form.append('image2',image2)
 form.append('image3',image3)
 form.append('image4',image4)
 form.append('image5',image5)
 form.append('image6',image6)
 


 let formData= await axios.post('/arduino/datasave' ,form,{
   headers:{
    'Content-Type': 'multipart/form-data'
   }
 })
 
 }

})


return (
   <>
   <div style={{position:'absolute','height':'1100px',width:'400px',left:'400px','top':'100px','border':'1px solid black'}}>
   <form action="/arduino/datasave" method="post" encType="multipart/form-data"  onSubmit={(e)=>{
     hendledata(e)
   }}>
    <h1 style={{textAlign:'center'}}>DataForm</h1>
 <p> ExperimentId<input  type="number" name="ExperimentId" style={{height:'20px',width:'70px',marginLeft:'40px'}}
 onChange={(e)=>{
   setExperimentId(e.target.value)
 }}
 
  /></p>
 <p> ExperimentName<input  type="text" name=" ExperimentName"style={{height:'50px',width:'200px',marginLeft:'20px'}}
   onChange={(e)=>{
     setExperimentName(e.target.value)
   }}
 /></p>
 
 <p> madeBy<input  type="text" name=" madeBy"style={{height:'50px',width:'200px',marginLeft:'60px'}}
   onChange={(e)=>{

     setmadeBy(e.target.value)
   }}
 /></p>
 <p> madeByinfo<input  type="text" name=" madeByinfo"style={{height:'50px',width:'200px',marginLeft:'60px'}}
   onChange={(e)=>{

     setmadeByinfo(e.target.value)
   }}
 /></p>
 <p>  overview<input type="text" name="overview"style={{height:'50px',width:'200px',marginLeft:'20px'}}
   onChange={(e)=>{
     setOverview(e.target.value)

   }}
 /></p>
 <p>  overviewinfo<input type="text" name="overviewinfo"style={{height:'50px',width:'200px',marginLeft:'20px'}}
   onChange={(e)=>{
     setOverviewinfo(e.target.value)

   }}
 /></p>
  <p>HS<input  type="text" name="HC"style={{marginLeft:'45px'}}
  onChange={(e)=>{
    setHC(e.target.value)
  }}
 /></p>
 <p>working<input  type="text" name="working"style={{marginLeft:'45px'}}
  onChange={(e)=>{
    setworking(e.target.value)

  }}
 /></p>
 <p> PINDiagramInfo <input type="text" name="pinDiagramInfo"style={{marginLeft:'20px'}}
   onChange={(e)=>{
     setpinDiagramInfo(e.target.value)

   }}
 /></p>
 <p> PINDiagramInfo2 <input type="text" name="pinDiagramInfo2"style={{marginLeft:'20px'}}
   onChange={(e)=>{
     setpinDiagramInfo2(e.target.value)

   }}
 /></p>
 <p>  CircuitDiagramInfo<input type="text" name="CircuitDiagramInfo"style={{marginLeft:'20px'}}
   onChange={(e)=>{
     setCircuitDiagramInfo(e.target.value)

   }}
 /></p>

 
 

 

 <p>code<input  type="text" name="code"style={{marginLeft:'45px'}}
  onChange={(e)=>{

   setcode(e.target.value)
  }}
 /></p>
 <p>result<input type="text" name="result
" style={{height:'30px',marginLeft:'30px'}}
onChange={(e)=>{
setResult(e.target.value)
}}
/></p>
<p> image1<input type="file" name="image1"
  onChange={(e)=>{
   setimage1(e.target.files[0])
  }}
 /></p>
 <p> image2<input type="file" name="image2"
  onChange={(e)=>{
   setimage2(e.target.files[0])
  }}
 /></p>
 <p> image3<input type="file" name="image3"
  onChange={(e)=>{
   setimage3(e.target.files[0])
  }}
 /></p>
<p> image4<input type="file" name="image4"
  onChange={(e)=>{
   setimage4(e.target.files[0])
  }}
 /></p>
 <p> image5<input type="file" name="image5"
  onChange={(e)=>{
   setimage5(e.target.files[0])
  }}
 /></p>
 <p> image6<input type="file" name="image6"
  onChange={(e)=>{
   setimage6(e.target.files[0])
  }}
 /></p>
 
submit <input type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/>  
 
   </form> 
   </div>
   </>
)
}
/*    <h1 style={{textAlign:'center'}}>DataForm</h1>
 <p> ExperimentId<input type="number" name="ExperimentId" style={{height:'20px',width:'70px',marginLeft:'40px'}}
 onChange={(e)=>{
   setExperimentId(e.target.value)
 }}
 
  /></p>
 <p> ExperimentName<input  type="text" name=" ExperimentName"style={{height:'50px',width:'200px',marginLeft:'20px'}}
   onChange={(e)=>{
     setExperimentName(e.target.value)
   }}
 /></p>
 
 <p> madeBy<input  type="text" name=" madeBy"style={{height:'50px',width:'200px',marginLeft:'60px'}}
   onChange={(e)=>{

     setmadeBy(e.target.value)
   }}
 /></p>
 <p> madeByinfo<input  type="text" name=" madeByinfo"style={{height:'50px',width:'200px',marginLeft:'60px'}}
   onChange={(e)=>{

     setmadeByinfo(e.target.value)
   }}
 /></p>
 <p>  overview<input type="text" name="overview"style={{height:'50px',width:'200px',marginLeft:'20px'}}
   onChange={(e)=>{
     setOverview(e.target.value)

   }}
 /></p>
 <p>  overviewinfo<input type="text" name="overviewinfo"style={{height:'50px',width:'200px',marginLeft:'20px'}}
   onChange={(e)=>{
     setOverviewinfo(e.target.value)

   }}
 /></p>

 
 <p> Material <input type="text" name="Material"style={{height:'50px',width:'200px',marginLeft:'20px'}}
  onChange={(e)=>{

   setMaterial(e.target.value)
  }}
  
 /></p>
 <p> Materialinfo <input type="text" name="Materialinfo"style={{height:'50px',width:'200px',marginLeft:'20px'}}
  onChange={(e)=>{

   setMaterialinfo(e.target.value)
  }}
  
 /></p>
 <p> PINDiagramInfo <input type="text" name="pinDiagramInfo"style={{height:'50px',width:'200px',marginLeft:'20px'}}
  onChange={(e)=>{

   setpinDiagramInfo(e.target.value)
  }}
  
 /></p>
 
 
 <p> CircuitDiagramInfo <input type="text" name="CircuitDiagramInfo"style={{height:'50px',width:'200px',marginLeft:'20px'}}
  onChange={(e)=>{

   setCircuitDiagramInfo(e.target.value)
  }}
  
 /></p>
  
  
 
 
 <p>steps<input  type="text" name="steps"style={{height:'50px',width:'200px',marginLeft:'45px'}}
  onChange={(e)=>{
   setSteps(e.target.value)

  }}
 /></p>
 <p>code<input  type="text" name="code"style={{height:'50px',width:'200px',marginLeft:'45px'}}
  onChange={(e)=>{

   setcode(e.target.value)
  }}
 /></p>
 <p>result<input type="text" name="result
" style={{height:'50px',width:'200px',marginLeft:'30px'}}
onChange={(e)=>{
setResult(e.target.value)
}}
/></p>*/
/*
form.append('ExperimentId',ExperimentId)
 form.append('ExperimentName',ExperimentName)
 
 form.append('madeBy',madeBy)
 form.append('madeByinfo',madeByinfo)
 form.append('overview',overview)
 form.append('overviewinfo',overviewinfo)
 form.append('Material',Material)
 form.append('Materialinfo',Materialinfo)
 form.append('pinDiagramInfo',pinDiagramInfo) 
 

 
 form.append('CircuitDiagramInfo',CircuitDiagramInfo) 
 
 
 form.append('steps',steps)
 form.append('code',code)
 form.append('result',result)
  form.append('Material',Material)
 form.append('Material1',Material1)
 form.append('Material2',Material2)
 form.append('Material3',Material3)
 form.append('Material4',Material4)


 <p>Material <input  type="text" name="Material"style={{marginLeft:'60px'}}
   onChange={(e)=>{

     setMaterial(e.target.value)
   }}
 /></p>
 <p>Material1 <input  type="text" name="Material1"style={{marginLeft:'60px'}}
   onChange={(e)=>{

     setMaterial1(e.target.value)
   }}
 /></p>
 <p>Material2 <input  type="text" name="Material2"style={{marginLeft:'60px'}}
   onChange={(e)=>{

     setMaterial2(e.target.value)
   }}
 /></p>
 <p>Material3 <input  type="text" name="Material3"style={{marginLeft:'60px'}}
   onChange={(e)=>{

     setMaterial3(e.target.value)
   }}
 /></p>
 <p>step1<input type="text" name="step1"style={{marginLeft:'20px'}}
  onChange={(e)=>{

   setstep1(e.target.value)
  }}
  
 /></p>
 <p> step2<input type="text" name="step2"style={{marginLeft:'20px'}}
  onChange={(e)=>{

   setstep2(e.target.value)
  }}
  
 /></p>
 <p> step3 <input type="text" name="step3"style={{marginLeft:'20px'}}
  onChange={(e)=>{

    setstep3(e.target.value)
  }}
  
 /></p>
 
 
 <p> step4 <input type="text" name="step4"style={{marginLeft:'20px'}}
  onChange={(e)=>{

    setstep4(e.target.value)
  }}
  
 /></p>
  
  
 
 
 <p>step5<input  type="text" name="step5"style={{marginLeft:'45px'}}
  onChange={(e)=>{
    setstep5(e.target.value)
  }}
 /></p>
 <p>step6<input  type="text" name="step6"style={{marginLeft:'45px'}}
  onChange={(e)=>{
    setstep6(e.target.value)

  }}
 /></p>
*/