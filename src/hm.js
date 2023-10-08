import React, { useContext, useEffect, useState } from 'react'
import {  store, store2 } from './App'
import Navibar from './navibar'
import './App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Hoc from './hoc'



const Hom = () => {
    const [data, setData] = useContext(store)
    const user = useContext(store2)


    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    localStorage.setItem('email', email);
    
    const [datta, setDatta] = useState([])

    useEffect(() =>{
      fetch(`http://stawro.xyz/user/${email}`)
      .then(res => res.json())
      .then(info => setDatta(info))
  },[])

    return(
      <div className='qstn-cnt-01'><Navibar/>
      {user.email === email && 
        <center>
          {datta.role === "admin" ? 
          <div>
            <h1>Stawro</h1>
            {data.map((user, i) => {
              return(
                <div>
                  <div key={i} className='hom-01-brd'>
                    <span><strong>{user.qno}</strong></span>
                    <h2 className='hom-01-h2'>{user.Question}</h2>
                    <div className='hom-02-cnt'>
                      <button className='hom-btn'>{user.option1}</button>
                    </div>
                    <div className='hom-02-cnt'>
                      <button className='hom-btn'>{user.option2}</button>
                    </div> <br />
                    <div className='hom-02-cnt'>
                      <button className='hom-btn'>{user.option3}</button>
                    </div>
                    <div className='hom-02-cnt'>
                      <button className='hom-btn'>{user.option4}</button>
                    </div><br />
                    <br />
                    <Link className='btn-01-01' to={`/delet?email=${email}&id=${user._id}`} >Delete</Link>
                  </div>
                </div>
              )
            })}
          </div> : 
          <div>
          </div> 
        }
        </center>}

      </div>
    )
}

export default Hoc(Hom);
