import React, { useContext, useEffect, useState, useRef } from 'react'
import Navibar from './navibar'
import Topn from './topnme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { store2 } from './App'
import { useLocation } from 'react-router-dom'
import Hoc from './hoc'
import { Link } from 'react-router-dom'
import ReactScrollableFeed from 'react-scrollable-feed'


const Chatpage = () => {


    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    console.log(email)
    localStorage.setItem('email', email);

    const messageContainerRef = useRef(null);

    const userr = useContext(store2)
    console.log(userr)
    const [chat, setChat] = useState([]);

  const handleEmailChange = (e) => {
    setChat(e.target.value);
  };


  const Post = (e) => {
    e.preventDefault();
    axios.post("http://stawro.xyz/chat/post", {chat, email, usernm, role})
    .then(res => {
        if(res.data.Status === "OK"){
        }else{
            alert("Data Not Saved")
        }
    })
  }

  const[data, setData] = useState([])

  useEffect(() => {
    fetch("http://stawro.xyz/chat/data")
    .then(res => res.json())
    .then(data => {
        setData(data)
    })

    fetch(`http://stawro.xyz/user/${email}`)
        .then(res => res.json())
        .then(info => setDatta(info))

        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;

  }, [data])

  
  const[datta, setDatta] = useState([])
  const usernm = datta.username;
  const role = datta.role;

  return (
    <div>
        <Topn />
        
        <Link to='/' className="sng-cht-1"><FontAwesomeIcon icon={faHome} /></Link>
        <center>
            
            {userr.email === email &&
            <div>
                <h2>Group Chat</h2>
                <Link to='https://www.instagram.com/direct/t/17849027174918885' className="sng-cht">Chat with Admin</Link>
                <div className='cht-pg-cnt-01'>
                
                    <div className='cht-pg-cnt-04' ref={messageContainerRef}>
                        {data.map((user, i) => {
                            if(userr.email === user.email){
                                return(
                                    <div key={i}>
                                    <div className='cht-pg-cnt-05'>
                                        <span className='cht-pg-sp-1'>{user.time}</span>
                                        <div className='cht-pg-cnt-03'>
                                            <span>{user.chat}</span>
                                            
                                        </div>
                                    </div>
                                </div>
                                )    
                            } if(userr.email !== user.email){
                                return(
                                    <div key={i}>
                                    <div className='cht-pg-cnt-07'>
                                        {user.role === "admin" ? 
                                        <span className='cht-pg-sp-4'>Admin</span> :
                                        <span className='cht-pg-sp-2'>{user.usernm}</span> }
                                        <div className='cht-pg-cnt-06'>
                                            {user.role === "admin" ? 
                                            <strong>{user.chat}</strong>
                                            :
                                            <span>{user.chat}</span>}
                                        </div>
                                        <span className='cht-pg-sp-3'>{user.time}</span>
                                    </div>
                                </div>
                                )
                            
                            }
                        })}
                        
                    </div>
                    
                </div>
                <div className='cht-pg-cnt-02'> 
                    <form onSubmit={Post}>
                    <input type='text' placeholder='Enter Text' required autoComplete='off' onChange={handleEmailChange} name='chat' />
                    <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
                    </form>
                </div>
            </div>}
        </center>
    </div>
  )
}

export default Hoc(Chatpage)
