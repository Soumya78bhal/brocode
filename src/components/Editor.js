import React, { useEffect, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';


const Editor = () => {
    const useref=useRef(false)
    useEffect(() => {
        
        async function init() {
           Codemirror.fromTextArea(
                document.getElementById('realtimeEditor'),
                {
                    mode: { name: 'javascript', json: true },
                    theme: 'midnight',
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
                }
            );   
        }
        if(useref.current===false){
          init();
        }
        return()=>{
          useref.current=true;
        }
        
      
    }, []);

    return(
       <textarea id="realtimeEditor"></textarea>
    )
};

export default Editor;
