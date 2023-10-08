import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { store2 } from './App';
import Navibar from './navibar';
import Topn from './topnme';
import Hoc from './hoc';

const Gamecnt = () => {

    const [datta, setDatta] = useState([]);
    useEffect(() => {
        fetch(`http://stawro.xyz/user/${email}`)
        .then(res => res.json())
        .then(info => setDatta(info))
    }, [])

    const user = useContext(store2)
    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    localStorage.setItem('email', email);

    const [total, setTotal] = useState([])

    const handleChange = (e) => {
        setTotal(e.target.value);
      };

      const Submitt = (e) => {
        e.preventDefault();
        axios.post("http://stawro.xyz/prizzzess", {email, total})
        .then(res => {
            if(res.data.Status === "OK"){
                window.location.reload();
            }
        })
      }

  return (
    <div>
      <Navibar />
        <Topn />
        {user.email === email &&
      <center>
        
        {datta.role === "admin" &&
        <div>
            <form onSubmit={Submitt}>
            <input type='number' placeholder='Enter The Total Prizes List' name='total' onChange={handleChange} required autoComplete='off' /><br />
            <button type='submit' className='btn-1' >set</button>
            </form>

            <div className='gme-cntr-01'>
              <Link to={`/addgif?email=${email}`} className='gme-cntr-01-lnk' >Add Gif / Prizes Data</Link>
            </div>
        </div>}
      </center>}
    </div>
  )
}

export default Hoc(Gamecnt)
