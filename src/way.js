import React,{useState, useEffect, useContext} from 'react'
import { store2 } from './App'
import Navibar from './navibar'
import './App.css'
import Hoc from './hoc'
import { useLocation } from 'react-router-dom'

const Way = () => {
    const user = useContext(store2)
    const [datta, setDatta] = useState([])

    const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    localStorage.setItem('email', email);

  useEffect(() =>{
    fetch(`http://stawro.xyz/way/${email}`)
    .then(res => res.json())
    .then(info => setDatta(info))
},[])


if(datta.way === "1"){
  window.location.href = `/one?qno=1&email=${email}`
} else if(datta.way === "2"){
  window.location.href=  `/one?qno=1&email=${email}`
} else if(datta.way === "3"){
  window.location.href=  `/one?qno=1&email=${email}`
} else if(datta.way === "4"){
  window.location.href=  `/one?qno=1&email=${email}`
} else if(datta.way === "5"){
  window.location.href=  `/one?qno=1&email=${email}`
} else if(datta.way === "6"){
  window.location.href=  `/one?qno=1&email=${email}`
} else if(datta.way === "7"){
  window.location.href=  `/one?qno=1&email=${email}`
} else if(datta.way === "8"){
  window.location.href=  `/one?qno=1&email=${email}`
} 

  return (
    <div>
      <Navibar />
      <center>
        <div className='way-cnt-01'>
          <h2>Welcome to <strong>sta<span>W</span>ro</strong></h2>
          <h1>Best of Luck</h1>
          <div className='way-cnt-02'>
            <img src='https://images.assettype.com/fortuneindia%2F2020-11%2F9cc704de-6f70-4a3f-b3e2-92991dfb24e3%2Fnetflix.jpg?w=1250&q=60' />
          </div>
        </div>
      </center>
    </div>
  )
}

export default Hoc(Way);
