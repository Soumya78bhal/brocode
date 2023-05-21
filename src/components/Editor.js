import React, { useEffect, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import ACTIONS from '../Actions';


const Editor = ({socketRef,roomId}) => {
    const useref=useRef(false);
    const editorRef=useRef(null);
    
    useEffect(() => {
        
        async function init() {
           editorRef.current=Codemirror.fromTextArea(
                document.getElementById('realtimeEditor'),
                {
                    mode: { name: 'javascript', json: true },
                    theme: 'midnight',
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
                }
            ); 
           editorRef.current.on('change',(instance,changes)=>{
              const code=instance.getValue();
              console.log(code);
              const{origin}=changes;
              if(origin!=='setValue'){
                socketRef.current.emit(ACTIONS.CODE_CHANGE,{
                  roomId,
                  code
                })
              }
           });

           
        }
       
        if(useref.current===false){
          init();        
        }
        return()=>{
          useref.current=true;
        }
      
    }, []);
    useEffect(()=>{
      if(socketRef.current){
        
        socketRef.current.on(ACTIONS.CODE_CHANGE,({code})=>{
          editorRef.current.setValue(code);
        })
      }
    },[socketRef.current])

    return(
       <textarea id="realtimeEditor"></textarea>
    )
};

export default Editor;
