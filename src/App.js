import React,{ useState, useEffect, createContext} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MyForm from './add'
import Hom from './hm'
import axios from 'axios'
import Home from './home'
import Elim from './elim'
import Tryrandom from './tryrandom'
import Profile from './profile'
import Sel from './sel'
import Way from './way'
import Way1 from './way1'
import Varia from './lnn1'
import Update from './update'
import MyForm2 from './add2'
import Error from './error'
import Ques02 from './questions2'
import Varia2 from './lnn2'
import MyForm3 from './add3'
import Ques03 from './question3'
import Varia3 from './lnn3'
import MyForm4 from './add4'
import Ques04 from './question4'
import Varia4 from './Lnn4'
import MyForm5 from './add5'
import Ques05 from './question05'
import Varia5 from './lnn5'
import MyForm6 from './add6'
import Ques06 from './question06'
import Varia6 from './lnn6'
import MyForm7 from './add7'
import Ques07 from './question7'
import Varia7 from './lnn7'
import MyForm8 from './add8'
import Ques08 from './question8'
import Varia8 from './lnn8'
import Won from './won'
import Trid from './trid'
import Gamecnt from './gamecnt'
import Winpage from './winpage'
import Chatpage from './chatpage'
import Bottompg from './botton'
import Prizecheck from './prizecheck'
import Addprizes from './addprizes'
import Viewprize from './viewprize'
import Prizeslst from './prizeslst'
import Paymnt from './paymnt'
import Login from './login'
import DeleteButton from './del1'
import DeleteButton2 from './del2'
import DeleteButton3 from './del3'
import DeleteButton4 from './del4'
import DeleteButton5 from './del5'
import DeleteButton6 from './del6'
import DeleteButton7 from './del7'
import DeleteButton8 from './del8'
import Clainre from './clainre'



export const ipp3 = createContext();
export const store = createContext();
export const store2 = createContext();
export const role = createContext(); 
export const time = createContext();
export const pcmobile = createContext();

const App = () => {

  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [ipadr, setIPaddr] = useState([]);
  
  axios.defaults.withCredentials = true;

    useEffect(()=> {
        fetch('http://stawro.xyz')
        .then(datta => datta.json())
        .then(datas => setData(datas))
        .catch(error => console.error("Data not foundd ", error))

        fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(ipadr => setIPaddr(ipadr.ip))

        axios.get('http://stawro.xyz/valid')
      .then(user => {
        setUser(user.data);
      })
      .catch(err => console.log(err))      

    },[])

  return (
    <div>
      <store.Provider value={[data, setData]}>
      <store2.Provider value={user}>
        <ipp3.Provider value={ipadr} >
      <BrowserRouter>
      <Routes>
      <Route path='/clainre' element={<Clainre />} />
      <Route path='/delet8' element={<DeleteButton8/>} />
      <Route path='/delet7' element={<DeleteButton7/>} />
      <Route path='/delet6' element={<DeleteButton6/>} />
      <Route path='/delet5' element={<DeleteButton5/>} />
      <Route path='/delet4' element={<DeleteButton4/>} />
      <Route path='/delet3' element={<DeleteButton3/>} />
        <Route path='/delet2' element={<DeleteButton2/>}/>
        <Route path='/delet' element={<DeleteButton/>}/>
        <Route path='/payment' element={<Paymnt/>}/>
        <Route path='/rewards' element={<Prizeslst />}/>
        <Route path='/viewprize' element={<Viewprize />} />
        <Route path='/addgif' element={<Addprizes />} />
        <Route path='/prize' element={<Prizecheck />} />
        <Route path='/bottom' element={<Bottompg/>}/>
        <Route path='/chat' element={<Chatpage />} />
        <Route path='/winpage' element={<Winpage />} />
        <Route path='/game' element={<Gamecnt />} />
        <Route path='/tranid' element={<Trid />} />
        <Route path='/congrats' element={<Won />} />
        <Route path='/update' element={<Update />} />
        <Route path='/gameon' element={<Varia />} />
        <Route path='/gameon/02' element={<Varia2 />} />
        <Route path='/gameon/03' element={<Varia3 />} />
        <Route path='/gameon/04' element={<Varia4 />} />
        <Route path='/gameon/05' element={<Varia5 />} />
        <Route path='/gameon/06' element={<Varia6 />} />
        <Route path='/gameon/07' element={<Varia7 />} />
        <Route path='/gameon/08' element={<Varia8 />} />
        <Route path='/select' element={<Sel />} />
        <Route path='/one' element={<Way1 />} /> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/qno' element={<Way />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/question' element={<Hom/>} />
        <Route path='/question/02' element={<Ques02 />} />
        <Route path='/question/03' element={<Ques03 />} />
        <Route path='/question/04' element={<Ques04 />} />
        <Route path='/question/05' element={<Ques05 />} />
        <Route path='/question/06' element={<Ques06 />} />
        <Route path='/question/07' element={<Ques07 />} />
        <Route path='/question/08' element={<Ques08 />} />
        <Route path='/phrase' element={<Tryrandom />} />
        <Route path='/fired' element={<Elim />} />
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<MyForm />} />
        <Route path='/add2' element={<MyForm2 />} />   
        <Route path='/add3' element={<MyForm3 />}  />  
        <Route path='/add4' element={<MyForm4 />}  /> 
        <Route path='/add5' element={<MyForm5 />}  />
        <Route path='/add6' element={<MyForm6 />}  /> 
        <Route path='/add7' element={<MyForm7 />}  />  
        <Route path='/add8' element={<MyForm8 />}  />  
        <Route path='*' element={<Error />} />  
      </Routes>
      </BrowserRouter>
      </ipp3.Provider>
      </store2.Provider>
      </store.Provider>
    </div>
  )
}

export default App;
