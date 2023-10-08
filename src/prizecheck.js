import React, { useContext, useEffect, useState } from 'react'
import Hoc from './hoc';
import { Link, useLocation } from 'react-router-dom';
import { store2 } from './App';
import Topn from './topnme';
import Navibar from './navibar';
import axios from 'axios';

const Prizecheck = () => {

  const user = useContext(store2)
  const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    const gifno = queryParm.get('no')
    localStorage.setItem('email', email);

    useEffect(() => {
      fetch(`http://stawro.xyz/gif/data/${gifno}`)
        .then(res => res.json())
        .then(info => setDatta(info))

        fetch(`http://stawro.xyz/winnn/data/${email}`)
        .then(res => res.json())
        .then(info => setData(info))

      fetch(`http://stawro.xyz/way01/${email}`)
    .then(res => res.json())
    .then(data => setQnoo(data))

    },[])

    const [datta, setDatta] = useState([])
    const [data, setData] = useState([])
    const [qnoo, setQnoo] = useState([])

  return (
    <div>
      <Navibar />
      <Topn/>
      {user.email === email &&
      <center>
        {qnoo.qno1 === "Yes" ?
        <div>
        <center>
          <Navibar />
          <h2>You Are Out Now </h2>
        </center>
      </div> :
        <div>
          <div>{datta.map((user, i) => {
            return(<div key={i}>
              <div className='prz-chck-div-cnt-01'>
                <img src='https://blog.empuls.io/content/images/2022/01/what-are-employee-rewards-and-recognition.png' alt='prizes'/>
              </div>
              <span className='prz-spn-no-un-may-be-01'>Click To Claim reward</span><br/>
              <span ><Link to={`/viewprize?email=${email}&gifno=${user.gifno}&gifname=${user.gifname}&gifdisc=${user.gifdisc}&giftime=${user.giftime}&email1=${email}&rank=${gifno}&gifimgurl=${user.gifimgurl}`} className='prz-lnk-may-be-01'>Claim Reward</Link></span>
            </div>)
           })}
           </div>
        </div>}
      </center>}
    </div>
  )
}
export default Hoc(Prizecheck); 