import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navibar from './navibar';
import Topn from './topnme';
import Hoc from './hoc';
import { store2 } from './App';

function Update() {

  const user = useContext(store2)
    
  const [password , setOldpass] = useState([])
  const [newpass1, setNewpass1] = useState([])
  const [newpass2, setNewpass2] = useState([])

  const Oldpasssub = (e) => {
    setOldpass(e.target.value);
  };

  const Newpass1sub = (e) => {
    setNewpass1(e.target.value);
  };

  const Newpass2sub = (e) => {
    setNewpass2(e.target.value);
  };



    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const id = queryParm.get('id');
    const email = queryParm.get('email');
    localStorage.setItem('email', email);


    const HandleSub = async (e) => {
      e.preventDefault();
      axios.post("http://stawro.xyz/loginn", {email, password})
      .then(res => {
        if(res.data.Status === "Success"){
          if(newpass1 === newpass2){
            const newPassword = newpass1
            axios.put(`http://stawro.xyz/pass/put/${email}`,{newPassword})
            .then(res => {
              if(res.data.Status === "OK"){
                setNotfys(true)
                setNotfy(false)
                setAlrt1(false)
              }
            })
          } else{
            setAlrt1(true)
            setNotfys(false)
            setAlrt1(false)

          }
        }else{
          setNotfy(true)
          setNotfys(false)
          setAlrt1(false)
        }
      })
    }


    const [notfy, setNotfy] = useState(false)
    const [notfys, setNotfys] = useState(false)
    const [alert1, setAlrt1] = useState(false)
    
  

  return ( 
    <div>
      <Navibar/>
      <Topn/>
      {user.email === email &&
      <center>
        <h2>Password</h2>

        <div className='updt-div-cnt-01'>
      <form onSubmit={HandleSub}>


        {notfy && <div>
          <span className='updt-not-spn-01'>Passowrd Not Updated</span>
        </div> }

        {notfys && <div>
          <span className='updt-not-spn-02'>Passowrd Updated</span>
        </div> }

        {alert1 && <div>
          <span>Passowrd Not Matched</span>
        </div> }

        
        <div className='updte-pass-cnt-01'>
        <span>Enter Old Password</span><br />
        <input type='text' placeholder='Enter old Password' onChange={Oldpasssub} name='password' required/><br/>
        </div>

        <div className='updte-pass-cnt-01'>
        <span>Enter New Passowrd</span><br />
        <input type='password' placeholder='Enter New Password' onChange={Newpass1sub} name='newpass1' required autoComplete='off'/><br/>
        </div>

        <div className='updte-pass-cnt-01'>
        <span>Re-Enter New Passowrd</span><br />
        <input type='password' placeholder='Re-Enter New Password' onChange={Newpass2sub} name='newpass2' required autoComplete='off' /><br/>
        </div>

        <button className='updt-btn-01-my-i-thk' type='submit'>Update New</button>
      </form>
      </div>
      </center>}
    </div>
  );
}

export default Hoc(Update);  