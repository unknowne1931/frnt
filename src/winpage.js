import React, { useEffect, useState } from 'react'
import Navibar from './navibar'
import Topn from './topnme'
import { Link } from 'react-router-dom'

const Winpage = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://stawro.xyz/winnn/data")
        .then(res => res.json())
        .then(info => setData(info))
    }, [])
  return (
    <div>
        <Navibar/>
        <Topn />
      <center>
        <h1>Win Page</h1>

        <div className='win-pgg-lnk-may-be-01'>
          <Link to='/rewards' className='win-pgg-lnk-may-be-01-lnk' > View Rewards</Link>
        </div>
        {data.map((user, k) => {
            return(
                <div key={k}>
                  <div className='win-cnt-01'>
                  <span className='win-cnt-01-spn-01'> <strong>{user.no}</strong>  </span> |
                    <span className='win-cnt-01-spn'> <strong>{user.username}</strong>  </span> |
                    <span className='win-cnt-01-spn'> <strong>{user.Time}</strong>  </span>
                  </div>
                </div>
            )
        })}
      </center>
    </div>
  )
}

export default Winpage
