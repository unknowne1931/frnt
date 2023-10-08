import React, { useContext, useEffect, useState } from 'react'
import {  store, store2 } from './App'
import Navibar from './navibar'
import './App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Hoc from './hoc'

const Ques04 = () => {
    const [data, setData] = useState([])
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

      fetch('http://stawro.xyz/dataway04')
      .then(res => res.json())
      .then(info => setData(info))

  },[])
    return(
      <div className='qstn-cnt-01'><Navibar/>
        <center>
          {datta.role ==="admin" ? 
          <div>
            
            <h1>Stawro</h1>
            <span>Way 04</span>
            {data.map((user, i) => {
              return(
                <div key={i} className='hom-01-brd'>
                  <span>Question NO : <strong>{user.qno}</strong></span>
                  <Link to={`/trial/${user.qno}`} className='lnk-decoration' > <h2 className='hom-01-h2'>{user.Question}</h2></Link>
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
                  <Link className='btn-01-01' to={`/delet4?email=${email}&id=${user._id}`} >Delete</Link>
                </div>
              )
            })}
          </div> :
          <div>
          </div>
            }
        </center>

      </div>
    )
}

export default Hoc(Ques04) ;
