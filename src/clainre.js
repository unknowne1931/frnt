import React from 'react'
import Hoc from './hoc'
import Navibar from './navibar'
import Topn from './topnme'
import { Link } from 'react-router-dom'
import Bottompg from './botton'

const Clainre = () => {
  return (
    <div>
        <Navibar/>
        <Topn/>
        <center>
            <div>
                <h2>Way to Claim Reward</h2><br />
                <span className='clr-noti'><strong>*</strong> If you have Rewards, Mail us from you'r Registerd E-Mail</span><br />
                <span className='clr-noti'><strong>*</strong> Or Send a Message Request to Instagram, to claim Rewards</span><br />
                <h3><Link to='https://www.instagram.com/stawro/' >Instagram</Link><br /> <strong>stawropuzzle@gmail.com</strong></h3>

                <div>
                    <span>For Quick Responce</span>
                    <span><strong>Subject</strong> To claim Rewards.</span>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Hoc(Clainre)
