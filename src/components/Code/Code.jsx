import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeDemo(props)
{
      
      return(
        <div className="xs:h-fit xs:w-90">
      <SyntaxHighlighter style={docco} >

          {props.code}
      </SyntaxHighlighter>
      </div>
      )
}