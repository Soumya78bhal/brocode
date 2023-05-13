import React, { useEffect } from 'react'
import CodeMirror from 'codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/midnight.css'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror'

const Editor = () => {
useEffect(()=>{
  async function init(){
    CodeMirror.fromTextArea(document.getElementById('editor1'),{
      mode:{name:'javascript',json:true},
      theme:'midnight',
      autoCloseTags:true,
      autoCloseBrackets:true,
      lineNumbers:true  
    }
    );

  }
  init();
},[])  
    
  return (
   <textarea 
    className='edit'
    id="editor1" 
   ></textarea>
  )
}

export default Editor