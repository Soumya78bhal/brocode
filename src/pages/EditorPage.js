import React,{useState} from 'react'
import Client from '../components/Client.js'
import Editor from '../components/Editor.js'
import { toast } from 'react-hot-toast'
import { useLocation } from 'react-router-dom'

const EditorPage = () => {
  const location=useLocation();
  const HandleCopy=(e)=>{
   
      toast.success(`Room Id copied`)
  }
  const [clients,setClients]=useState([
    {socketId:1,username:'Rahul'},
    {socketId:2,username:'Raghab'},
    {socketId:3,username:'damar'},
  ])

  return (
    <div className='mainwrap'>
      <div className='aside'>
        <div className='image'>
            <img src="/coding.png" className='logo' alt="logo" />
        </div>
        
        <div className='asideinner'>
          <div>Connected</div>  
          <div className='Connectedmembers'>
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