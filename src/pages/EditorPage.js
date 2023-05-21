import React,{useEffect, useRef, useState} from 'react'
import Client from '../components/Client.js'
import Editor from '../components/Editor.js'
import { toast } from 'react-hot-toast'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { initSocket } from '../socket.js'
import ACTIONS from '../Actions.js'

const EditorPage = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const socketRef=useRef(null);
  const useref=useRef(false);
  const {roomId}=useParams();
 
  useEffect(()=>{
    const init=async()=>{
      socketRef.current=await initSocket();
      socketRef.current.on('connect_error',(err)=>handleError(err));
      socketRef.current.on('connect_failed',(err)=>handleError(err));
      
      function handleError(err){
        console.log('Connection failed',err);
        toast.error(err);
        navigate('/');
      }

      socketRef.current.emit(ACTIONS.JOIN,{
        roomId,
        username: location.state?.Username,
      });

      socketRef.current.on(ACTIONS.JOINED,({clients,socketId,username})=>{
        if(username!==location.state?.Username){
          toast.success(`${username} has joined`);
        }
        setClients(clients);
      });

      socketRef.current.on(ACTIONS.DISCONNECTED,({socketId,username})=>{
        toast.success(`${username} left the room`);
        setClients((prev)=>{
          return prev.filter((client)=>client.socketId !==socketId)
        })
      });
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
   
 
  ])
  if(location.state==null){
     return navigate('/');
  }
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
          <Editor socketRef={socketRef} roomId={roomId}/>
        </div>
    </div>
  )
}

export default EditorPage