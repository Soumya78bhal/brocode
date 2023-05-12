import React,{useState} from 'react'
import {v4 as uuidv4} from'uuid'
import toast from'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
    const [roomId,SetRoomId]=useState('');
    const [Username,SetUsername]=useState('');
    const navigate = useNavigate();
    const CreateNewRoom =(e)=>{
        e.preventDefault();       
        var id=uuidv4();
        SetRoomId(id);
        toast.success('Created new room' )
    }
    const JoinRoom=(e)=>{
        if(!roomId || !Username){
            toast.error('Room ID and Username required');
            return;
        }
        navigate(`/editor/${roomId}`,{
            state:{
                username:Username,
                roomId:roomId              
            }
        })
    }
    const Handleclick=(e)=>{
        if(e.code==='Enter'){
            JoinRoom();
        }
    }
  return (
    <div className='HomePageWrapper'>
        <div className='FormWrapper'>
            <img src="/coding.png" className='logo' alt="logo" />
            <h4 className='MainLabel'>Enter Room Id and Username</h4>
            <div className='inputgroup'>
                <input 
                    type="text" 
                    className='RoomId' 
                    placeholder='RoomId'  
                    onChange={(e)=>SetRoomId(e.target.value)}
                    value={roomId}
                    onKeyUp={Handleclick}
                />
                <input
                    type="text" 
                    className='Username' 
                    placeholder='Username' 
                    onChange={(e)=>SetUsername(e.target.value)}
                    value={Username}
                    onKeyUp={Handleclick}
                />
                <button 
                    className='JoinButton' onClick={JoinRoom}>Join</button>
                <span className='newroom'>
                    To create new room &nbsp;
                    <a onClick={CreateNewRoom} href="">Click</a>
                </span>
            </div>
            
        </div>
        <footer className='footer'>
            <div>Built by <a href="https://github.com/Soumya78bhal">SoumyaBhal</a></div>
        </footer>
    </div>
  )
}

export default HomePage