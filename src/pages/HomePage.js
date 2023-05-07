import React from 'react'

const HomePage = () => {
  return (
    <div className='HomePageWrapper'>
        <div className='FormWrapper'>
            <img src="/coding.png" className='logo' alt="logo" />
            <h4 className='MainLabel'>Enter Room Id and Username</h4>
            <div className='inputgroup'>
                <input type="text" className='RoomId' placeholder='RoomId'/><br />
                <input type="text" className='Username' placeholder='Username'/><br />
                <button className='JoinButton'>Join</button><br />
                <span className='newroom'>
                    To create new room &nbsp;
                    <a href="">Click</a>
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