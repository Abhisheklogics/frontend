import React from "react";
export default function Contactus()
{
  return(
    <>
    <div style={{height:'500px',width:'600px',backgroundColor:"white",marginTop:'65px',marginLeft:'200px'}}>
        <h1 style={{marginLeft:'20px'}}>
            Contacts Us
        </h1>
    <div style={{height:'400px',width:'400px',border:'1px solid red', marginLeft:'100px',borderRadius:'10PX'}}>
<div  style={{marginTop:"20px"}}>
    <h3  style={{height:'20px',width:"250px",backgroundColor:'red', color:'white', padding:'5px',
        marginLeft:'50px',textAlign:'center'
    }}>Contact Us Form</h3>
   <p style={{marginLeft:'10px',marginTop:'10px'}}> Name :<input  placeholder="enter name..." style={{marginLeft:'19px',marginTop:'-10px',height:'20px',borderRadius:'5PX',borderColor:'pink'}}/></p>
 <p  style={{marginLeft:'10px',marginTop:'0px'}}>   Mobile:<input placeholder="enter mobile..." style={{marginLeft:'14px',marginTop:'-20px',height:'20px',borderRadius:'5PX',borderColor:'pink'}}/></p>
 <p  style={{marginLeft:'10px',marginTop:'0px'}}>   Email :<input placeholder="enter email..." style={{marginLeft:'16px',marginTop:'-20px',height:'20px',borderRadius:'5PX',borderColor:'pink'}}/></p>
 <p  style={{marginLeft:'10px',marginTop:'0px'}}>  Subject :<input placeholder="enter subject..."style={{marginLeft:'9px',marginTop:'-20px',height:'20px',borderRadius:'5PX',borderColor:'pink'}}/></p>
 <p  style={{marginLeft:'10px',marginTop:'0px',}}>   Message :<input placeholder="enter message.." style={{marginLeft:'10px',marginTop:'0px',height:'100px',borderRadius:'5px',borderColor:'pink'}}/></p>
    <button style={{height:'40px',width:'200px',marginLeft:'80px',marginTop :'0px',backgroundColor:'#348de0',color:'white'}}>Submit</button>
</div>


    </div>
    </div>
    </>
  )
}