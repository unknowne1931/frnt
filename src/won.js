import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Hoc from './hoc';
import Navibar from './navibar';
import { ipp3 } from './App';
import axios from 'axios';
import Topn from './topnme';
import Winn from './images/winstamp.png'

const Won = () => {


  const location = useLocation()
    const queryParm = new URLSearchParams(location.search);
    const email = queryParm.get('email')
    const id = queryParm.get('id')
    localStorage.setItem('email', email);

    const IP = useContext(ipp3);

    const [verify, setVerify] = useState([])


    const[count, setCount] = useState([])

    const[prize, setPrize] = useState([])

    useEffect(() => {
      fetch(`http://stawro.xyz/way01/${email}`)
        .then(res => res.json())
        .then(info => setVerify(info))

        fetch(`http://stawro.xyz/won/length`)
        .then(res => res.json())
        .then(info => setCount(info))

        fetch('http://stawro.xyz/prize/data')
        .then(res => res.json())
        .then(ohf => setPrize(ohf))

        fetch("http://stawro.xyz/prize/data")
        .then(res => res.json())
        .then(info => setPrize(info))

        fetch(`http://stawro.xyz/user/${email}`)
        .then(res => res.json())
        .then(info => setData(info))

    }, [])

    const [data, setData] = useState([])
    const username = data.username;

    

    const [qno1 , setQno1] = useState({
      qno1: "Yes",
    })
  
    const [qno2 , setQno2] = useState({
      qno2: "Out",
    })
  
    const [qno3 , setQno3] = useState({
      qno3: "Out",
    })
  
    const [qno4 , setQno4] = useState({
      qno4: "Out",
    })
  
    const [qno5 , setQno5] = useState({
      qno5: "Out",
    })
  
    const [qno6 , setQno6] = useState({
      qno6: "Out",
    })
  
    const [qno7 , setQno7] = useState({
      qno7: "Out",
    })
  
    const [qno8 , setQno8] = useState({
      qno8: "Out",
    })
  
    const [qno9 , setQno9] = useState({
      qno9: "Out",
    })
  
    const [qno10 , setQno10] = useState({
      qno10: "Out",
    })
    
  
    const Elim1 = async (e) => {
      const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno1),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }


    const Elim2 = async (e) => {
      const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno2),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim3 = async (e) => {
      const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno3),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim4 = async (e) => {
      const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno4),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim5 = async (e) => {
      const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno5),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim6 = async (e) => {
      const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno6),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim7 = async (e) => {
      const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno7),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim8 = async (e) => {
      const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno8),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim9 = async (e) => {
      const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno9),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }

    const Elim10 = async (e) => {
      const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(qno10),
          });
          
          if (response.ok) {            
              const response = await fetch(`http://stawro.xyz/way01/put/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(qno1),
              });
          } else {
            console.error('Failed to update resource');
          }
          alert("We Blocked You, Because You Cheated Us")
          window.location.href=`/fired?email=${email}&id=${id}`
          
    }


    function Run(){
      window.location.href=`/fired?email=${email}&id=${id}`
    }

    function Won(){
      axios.post('http://stawro.xyz/won/id/check',{email})
      .then(res => {
        if(res.data.Status === "OK"){
          window.location.href = `/profile?email=${email}`
        }else{
          axios.post("http://stawro.xyz/won/match" ,{email , IP})
          .then(res => {
            if(res.data.Status === "OK"){
              {prize.map((user) =>{
                if(count.dataLength <= user.total){
                  const star = "Yes";
                  const no = count.dataLength;
                  axios.post("http://stawro.xyz/winnn",{email, IP ,star, no, username})
                  .then(res => {
                    if(res.data.Status === "OK"){
                      window.location.href=`/prize?email=${email}&no=${count.dataLength}`
                    }
                  })
                } else if(count.dataLength <= 30){
                  const star = "6";
                  const no = count.dataLength;
                  axios.post("http://stawro.xyz/winnn",{email, IP ,star,no})
                  .then(res => {
                    if(res.data.Status === "OK"){
                      window.location.href=`/prize?email=${email}&no=${count.dataLength}`
                    }
                  })
                }else if(count.dataLength <= 50){
                  const star = "5";
                  const no = count.dataLength;
                  axios.post("http://stawro.xyz/winnn",{email, IP ,star, no, username})
                  .then(res => {
                    if(res.data.Status === "OK"){
                      window.location.href=`/prize?email=${email}&no=${count.dataLength}`
                    }
                  })
                }else if(count.dataLength <= 80){
                  const star = "4";
                  const no = count.dataLength;
                  axios.post("http://stawro.xyz/winnn",{email, IP ,star, no, username})
                  .then(res => {
                    if(res.data.Status === "OK"){
                      window.location.href=`/prize?email=${email}&no=${count.dataLength}`
                    }
                  })
                }else if(count.dataLength <= 100){
                  const star = "3";
                  const no = count.dataLength;
                  axios.post("http://stawro.xyz/winnn",{email, IP ,star, no, username})
                  .then(res => {
                    if(res.data.Status === "OK"){
                      window.location.href=`/prize?email=${email}&no=${count.dataLength}`
                    }
                  })
                }else if(count.dataLength <= 150){
                  const star = "2";
                  const no = count.dataLength;
                  axios.post("http://stawro.xyz/winnn",{email, IP ,star, no, username})
                  .then(res => {
                    if(res.data.Status === "OK"){
                      window.location.href=`/prize?email=${email}&no=${count.dataLength}`
                    }
                  })
                }else if(count.dataLength <= 200){
                  const star = "1";
                  const no = count.dataLength;
                  axios.post("http://stawro.xyz/winnn",{email, IP ,star, no, username})
                  .then(res => {
                    if(res.data.Status === "OK"){
                      window.location.href=`/prize?email=${email}&no=${count.dataLength}`
                    }
                  })
                }
              })}
            }
          })
        }
      })
    }

  return (
    <div>
      <Navibar />
      {verify.qno10 === "Yes" ?  
      <div>
        <center>
        <h2>You Are Out Now </h2>
        </center>
      </div>
      :
      <div>
        <Navibar />
        <Topn/>
      <center>
        <h1 className='win-cnt-un-01-h1'> You Won The Match</h1>

        {verify.qno1 === "false" && Elim1()}
        {verify.qno1 === "Out" && Elim1()}
        {verify.qno2 === "false" && Elim2()}
        {verify.qno2 === "Out" && Elim2()}
        {verify.qno3 === "false" && Elim3()}
        {verify.qno3 === "Out" && Elim3()}
        {verify.qno4 === "false" && Elim4()}
        {verify.qno4 === "Out" && Elim4()}
        {verify.qno5 === "false" && Elim5()}
        {verify.qno5 === "Out" && Elim5()}
        {verify.qno6 === "false" && Elim6()}
        {verify.qno6 === "Out" && Elim6()}
        {verify.qno7 === "false" && Elim7()}
        {verify.qno7 === "Out" && Elim7()}
        {verify.qno8 === "false" && Elim8()}
        {verify.qno8 === "Out" && Elim8()}
        {verify.qno9 === "false" && Elim9()}
        {verify.qno9 === "Out" && Elim9()}
        {verify.qno10 === "false" && Elim10()}
        {verify.qno10 === "Out" && Elim10()}
        {verify.qno1 === "Yes" && Run()}
        {verify.qno1 === "True" && <div>
          <button onClick={Won} className='btn-1' >Finish</button>
          <div className='won-cnt-01-div-may-be-04-cnt-04-img'>
          <img src={Winn} alt='img'/>
          </div>
          </div>
          
          }
      </center>
      </div>
      }
    </div>
  )
}

export default Hoc(Won)