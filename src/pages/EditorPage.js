import React,{useEffect, useRef, useState} from 'react'
import Client from '../components/Client.js'
import Editor from '../components/Editor.js'
import { toast } from 'react-hot-toast'
import { useLocation } from 'react-router-dom'
import { initSocket } from '../socket.js'
import ACTIONS from '../Actions.js'

const EditorPage = () => {
  const location=useLocation();
  const socketRef=useRef(null);
  const useref=useRef(false);
  useEffect(()=>{
    const init=async()=>{
      socketRef.current=await initSocket();
      
      // socketRef.current.emit(ACTIONS.JOIN,{
      //   roomId,
      //   username: location.state?.Username,
      // }) 
    }
    if(useref.current===false){
      init();
      useref.current=true;
    }
    
  },[]);

 
  const HandleCopy=(e)=>{
   
      toast.success(`Room Id copied`)
  }
  const [clients,setClients]=useState([
    {socketId:1,username:'Rahul'},
    {socketId:2,username:'Raghab'},
    {socketId:3,username:'damar hey'},
 
  ])

  return (
    <div className='mainwrap'>
      <div className='aside'>
        <div className='image'>
            <img src="/coding.png" className='logo' alt="logo" />
        </div>
        
        <div className='lines asideinner'>
          <div className='lines'>Connected</div>  
          <div className='lines Connectedmembers'>
            {clients.map((client)=><Client key={client.socketId} username={client.username}/>)}
          </div>
        </div>
        <button className='btn copybtn' onClick={HandleCopy}>Copy ROOM ID</button>
          <button className='btn leavebtn'>Leave</button>
      </div>
      <div className='editorWrap'>
          <Editor></Editor>
        </div>
    </div>
  )
}

export default EditorPage