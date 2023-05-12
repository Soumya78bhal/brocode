import React from 'react'


const Editor = () => {
  
    
const ClickHandle=(event)=>{
   console.log(event.code);
    
   
    if (event.code === 'Tab') { // tab was pressed
        event.preventDefault();
        const textbox=  document.getElementById("editor");
        textbox.focus();
        textbox.value+="   "; 
    }
} 
  return (
   <textarea 
    className='edit' 
    name="editor" 
    id="editor" 
    onKeyDown={ClickHandle}></textarea>
  )
}

export default Editor