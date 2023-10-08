import React, { useContext, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import staWro from './images/staWro.png'
import axios from 'axios'
import { store2 } from './App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faRightToBracket,faComment,faWonSign,faHouse, faUser, faPlay,faHashtag ,faUserPlus, faBars,faPlus, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8} from '@fortawesome/free-solid-svg-icons'

const Navibar = () => {

  const user = useContext(store2)

  
  const logout =() => {
    axios.get('http://stawro.xyz/logout')
    .then(res => {
      if(res.data === "Success")
      localStorage.removeItem('emaill');
      localStorage.removeItem('name');
      localStorage.removeItem('unam');
      localStorage.removeItem('picture');
      window.location.href='/login'
    }).catch(err => console.log(err))
  }

    const[datta, setData] = useState([]) 

    const email = localStorage.getItem('email');
    
    useEffect(() =>{
      fetch(`http://stawro.xyz/user/${email}`)
      .then(res => res.json())
      .then(dat => setData(dat))
    },[])

    const [menuStatus, setMenuStatus] = useState('closed');

    const reveal = () => {
      const menu = document.getElementById('menu');
      if (menuStatus === 'closed') {
        menu.style.display = 'block';
        setMenuStatus('open');
      } else {
        menu.style.display = 'none';
        setMenuStatus('closed');
      }
    };

    const [mmenuStatus, setMmenuStatus] = useState('closed');

    const Reveal = () => {
      const menu = document.getElementById('menuuu');
      if (mmenuStatus === 'closed') {
        menu.style.display = 'block';
        setMmenuStatus('open');
      } else {
        menu.style.display = 'none';
        setMmenuStatus('closed');
      }
    };

  return (
    <div>
      {user.email && 
      <div className="menuu">
      <FontAwesomeIcon className='menu-fntaws' icon={faBars} onClick={reveal} name={menuStatus === 'closed' ? 'menu-outline' : 'add'} />
      <div className="links" id="menu">
        <Link to='/' name="Home" className='navi-br-lnk-1'><FontAwesomeIcon icon={faHouse} /></Link>
        <Link to={`/profile?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faUser} /></Link>
        <Link to={`/select?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faPlay} /></Link>
        <Link to='/winpage' className='navi-br-lnk-1'><FontAwesomeIcon icon={faWonSign} /></Link>
        <Link to={`/chat?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faComment} /></Link>
        {datta.role !== "admin" && <Link onClick={logout} className='navi-br-lnk-1'  ><FontAwesomeIcon icon={faRightFromBracket} /></Link> }                      
        {datta.role === "admin"&& <div>
        <Link to={`/game?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faHashtag} /></Link>
        <Link to={`/tranid?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faUserPlus} /><FontAwesomeIcon icon={fa1} /></Link>
        <Link to={`/add?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa1} /></Link>
        <Link to={`/add2?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa2} /></Link>
        <Link to={`/add3?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa3} /></Link> 
        <Link to={`/add4?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa4} /></Link>
        <Link to={`/add5?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa5} /></Link>
        <Link to={`/add6?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa6} /></Link>
        <Link to={`/add7?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa7} /></Link>
        <Link to={`/add8?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa8} /></Link>
        <Link to={`/question?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={fa1} /></Link>
        <Link to={`/question/02?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={fa2} /></Link>
        <Link to={`/question/03?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={fa3} /></Link>
        <Link to={`/question/04?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={fa4} /></Link>
        <Link to={`/question/05?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={fa5} /></Link>
        <Link to={`/question/06?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={fa6} /></Link>
        <Link to={`/question/07?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={fa7} /></Link>
        <Link to={`/question/08?email=${user.email}`} className='navi-br-lnk-1'><FontAwesomeIcon icon={fa8} /></Link>
        <Link onClick={logout} className='navi-br-lnk-1'  ><FontAwesomeIcon icon={faRightFromBracket} /></Link>
        </div>}
      </div>
      </div>
      }
      
      <center>
      
      
        <div className='navi-cnt'>
          {datta.role !== "admin" &&
        <div className='tp-img-cnt-01'>
          <Link to='/'>
          <img className='logo-img' src={staWro} alt='Logo' />
          </Link>
        </div>
        }


            {
              user.email ? 

              <div  >
                <div className='navi-cnt-lnk'>

                <div className='navi-br-lnk-cnt-min'>
                <div className='navi-br-lnk-div'><Link to='/' className='navi-br-lnk'>Home</Link><br /></div>
                
                 <div className='navi-br-lnk-div'><Link to={`/select?email=${user.email}`} className='navi-br-lnk'>Play</Link><br /> </div>
                
                 <div className='navi-br-lnk-div'><Link to={`/profile?email=${user.email}`} className='navi-br-lnk'>Profile</Link> <br /> 
                 </div>

                 <div className='navi-br-lnk-div'><Link to='/winpage' className='navi-br-lnk'>Winners</Link> <br /> 
                 </div>

                 <div className='navi-br-lnk-div'><Link to={`/chat?email=${user.email}`} className='navi-br-lnk'>Chat</Link> <br /> 
                 </div>


                 {datta.role !== "admin" && <button onClick={logout} className='nav-br-bttn-01'  ><FontAwesomeIcon icon={faRightFromBracket} /></button>}  
                
                </div>

                <div className='navi-br-lnk-cnt-min-icon'>
                <div className='tp-img-cnt-01-adm-icon'>
                      <Link to='/'>
                        <img className='logo-img' src={staWro} alt='Logo' />
                      </Link>
                    </div>
                <div className='navi-br-lnk-div'><Link to='/' className='navi-br-lnk'><FontAwesomeIcon icon={faHouse} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/select?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faPlay} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/profile?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faUser} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to='/winpage' className='navi-br-lnk'><FontAwesomeIcon icon={faWonSign} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/chat?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faComment} /></Link><br /></div>
                {datta.role !== "admin" && <button onClick={logout} className='nav-br-bttn-01'  ><FontAwesomeIcon icon={faRightFromBracket} /></button>}
                </div>

                {datta.role === "admin" && <div className='navi-br-lnk-cnt-min-icon'>

                <div className='navi-br-lnk-div'>
                  <Link to={`/game?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faHashtag} /></Link><br />
                </div>
                <div className='navi-br-lnk-div'>
                  <Link to={`/tranid?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faUserPlus} /></Link><br />
                </div>

                <div className='navi-br-lnk-div'>
                  <Link to={`/add?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa1} /></Link><br />
                </div>
                <div className='navi-br-lnk-div'>
                  <Link to={`/add2?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa2} /></Link><br />
                </div>
                <div className='navi-br-lnk-div'>
                  <Link to={`/add3?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa3} /></Link><br />
                </div>
                <div className='navi-br-lnk-div'>
                  <Link to={`/add4?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa4} /></Link><br />
                </div>
                <div className='navi-br-lnk-div'>
                  <Link to={`/add5?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa5} /></Link><br />
                </div>
                <div className='navi-br-lnk-div'>
                  <Link to={`/add6?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa6} /></Link><br />
                </div>
                <div className='navi-br-lnk-div'>
                  <Link to={`/add7?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa7} /></Link><br />
                </div>
                <div className='navi-br-lnk-div'>
                  <Link to={`/add8?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={fa8} /></Link><br />
                </div>
                

                <br />
                <div className='navi-br-lnk-div'><Link to={`/question?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={fa1} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/question/02?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={fa2} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/question/03?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={fa3} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/question/04?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={fa4} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/question/05?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={fa5} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/question/06?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={fa6} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/question/07?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={fa7} /></Link><br /></div>
                <div className='navi-br-lnk-div'><Link to={`/question/08?email=${user.email}`} className='navi-br-lnk'><FontAwesomeIcon icon={fa8} /></Link><br /></div>
                {datta.role === "admin" && <button onClick={logout} className='nav-br-bttn-01'  ><FontAwesomeIcon icon={faRightFromBracket} /></button>}
                </div>
                  }
                


                  {datta.role === "admin" ? 
                  <div className='navi-br-lnk-cnt-min'>
                    <div className='tp-img-cnt-01-adm'>
                      <Link to='/'>
                        <img className='logo-img' src={staWro} alt='Logo' />
                      </Link>
                    </div>
                      <div className='navi-br-lnk-div'>
                        <Link to="/winpage" className='navi-br-lnk'>Winners</Link><br />
                      </div>
                      <div className='navi-br-lnk-div'>
                        <Link to={`/game?email=${user.email}`} className='navi-br-lnk'>Game Count</Link><br />
                      </div>
                      <div className='navi-br-lnk-div'>
                        <Link to={`/tranid?email=${user.email}`} className='navi-br-lnk'>Transaction ID</Link><br />
                      </div>
                      <div className='navi-br-lnk-div'>
                        <Link to={`/add?email=${user.email}`} className='navi-br-lnk'>Add 1</Link><br />
                      </div>
                    
                      <div className='navi-br-lnk-div'>
                        <Link to={`/add2?email=${user.email}`} className='navi-br-lnk'>Add 2</Link><br />
                      </div>

                      <div className='navi-br-lnk-div'>
                        <Link to={`/add3?email=${user.email}`} className='navi-br-lnk'>Add 3</Link><br />
                      </div>
                    
                      <div className='navi-br-lnk-div'>
                        <Link to={`/add4?email=${user.email}`} className='navi-br-lnk'>Add 4</Link><br />
                      </div>

                      <div className='navi-br-lnk-div'>
                        <Link to={`/add5?email=${user.email}`} className='navi-br-lnk'>Add 5</Link><br />
                      </div>
                    
                      <div className='navi-br-lnk-div'>
                        <Link to={`/add6?email=${user.email}`} className='navi-br-lnk'>Add 6</Link><br />
                      </div>

                      <div className='navi-br-lnk-div'>
                        <Link to={`/add7?email=${user.email}`} className='navi-br-lnk'>Add 7</Link><br />
                      </div>
                    
                      <div className='navi-br-lnk-div'> 
                        <Link to={`/add8?email=${user.email}`} className='navi-br-lnk'>Add 8</Link><br />
                      </div>
                    
                      <div className='navi-br-lnk-div'> 
                        <Link to={`/question?email=${user.email}`} className='navi-br-lnk'>Question 01</Link>< br />
                      </div>
                    
                      <div className='navi-br-lnk-div'>
                        <Link to={`/question/02?email=${user.email}`} className='navi-br-lnk'>Question 02</Link><br />
                      </div>

                      <div className='navi-br-lnk-div'>
                        <Link to={`/question/03?email=${user.email}`} className='navi-br-lnk'>Question 03</Link><br />
                      </div>
                    
                      <div className='navi-br-lnk-div'> 
                        <Link to={`/question/04?email=${user.email}`} className='navi-br-lnk'>Question 04</Link><br />
                      </div>
                    
                      <div className='navi-br-lnk-div'>
                        <Link to={`/question/05?email=${user.email}`} className='navi-br-lnk'>Question 05</Link><br />
                      </div>
                    
                      <div className='navi-br-lnk-div'> 
                        <Link to={`/question/06?email=${user.email}`} className='navi-br-lnk'>Question 06</Link><br />
                      </div>

                      <div className='navi-br-lnk-div'>
                        <Link to={`/question/07?email=${user.email}`} className='navi-br-lnk'>Question 07</Link><br />
                      </div>

                      <div className='navi-br-lnk-div'>
                        <Link to={`/question/08?email=${user.email}`} className='navi-br-lnk'>Question 08</Link><br />
                      </div>

                      <button onClick={logout} className='nav-br-bttn-01'  ><FontAwesomeIcon icon={faRightFromBracket} /></button>
  
                  
                  </div>
                  
                  :
                  
                  <div></div>
                  }
                </div>

                
              </div>
              :

            <div>
                <div className='navi-br-out-icn-not'>
                  <div className='navi-br-lnk-div'>
                    <Link to='/' className='navi-br-lnk'>Home</Link><br />
                  </div>
                  <div className='navi-br-lnk-div'>
                    <Link to='/login' className='navi-br-lnk'>Login</Link>
                  </div>
                </div>
                <div className="menuu">
                  <FontAwesomeIcon className='menu-fntaws1' icon={faBars} onClick={Reveal} name={mmenuStatus === 'closed' ? 'menu-outline' : 'add'} />
                  <div className="links" id="menuuu">
                    <Link to='/' name="Home" className='navi-br-lnk-1'><FontAwesomeIcon icon={faHouse} /></Link>
                    <Link to='/login' name="Login" className='navi-br-lnk-1'><FontAwesomeIcon icon={faRightToBracket} /></Link>
                  </div>
                </div>
              
            </div>
            }

        </div>
      </center>
    </div>
  )

  
}



export default Navibar
