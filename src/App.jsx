
import React ,{lazy,Suspense}from "react";
const  Header = lazy(()=>import("./components/header/Header"));
import { Outlet} from "react-router-dom";

export default function App()
{
  
  return(
    <>
  <Suspense fallback={<div>Loading...</div>}>
     <Header/>
     <Outlet/>
     </Suspense>
  
     
 
    </>
  )
}