import React,{lazy,Suspense} from 'react';

 const SyntaxHighlighter =lazy(()=>import('react-syntax-highlighter')) 
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeDemo(props)
{
      
      return(
      
        <div className=" xl:ml-20 xs:h-96 xs:w-90 xl:overflow-auto xl:h-60 xl:w-96">
            <Suspense fallback={<h1>Loading...</h1>}>
      <SyntaxHighlighter language="" style={docco} >

          {props.code}
      </SyntaxHighlighter>
      </Suspense>
      </div>
      )
}