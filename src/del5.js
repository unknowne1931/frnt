import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { store2 } from './App';
import Hoc from './hoc';
import Navibar from './navibar';
import Topn from './topnme';

function DeleteButton5() {

    const user = useContext(store2)

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    const id = queryParm.get("id")

  const handleDelete = async () => {
    axios.delete(`http://stawro.xyz/api/items/5/${id}`)
    .then(res => {
        if(res.data.Status === "OK"){
            window.location.href=`/question/05?email=${email}`
        }else{
            alert("Something Went wrong")
        }
    })
  }

  useEffect(() =>{
    fetch(`http://stawro.xyz/user/${email}`)
    .then(res => res.json())
    .then(info => setDatta(info))
},[])

const [datta, setDatta] = useState([])

  return (
    <div>
        <Navibar/>
        <Topn/>
        {datta.role === "admin" &&
        <div>
            {user.email === email &&
            <center>
                <div className='del-btn-cnt'>
                    <button onClick={handleDelete} className='btn-01'>DELETE</button>
                </div>
            </center>}
        </div>}
    </div>    
  );
}

export default Hoc(DeleteButton5);
