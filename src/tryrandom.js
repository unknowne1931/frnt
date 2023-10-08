import React, { useContext, useState } from 'react';
import axios from 'axios';
import { store2 } from './App';
import Navibar from './navibar';
import Hoc from './hoc';
import Topn from './topnme';

function Tryrandom() {

  const user = useContext(store2)

  const email = user.email
  localStorage.setItem('email', email);
  const words = [
    "apple", "banana", "cherry", "date", "fig", "grape", "honeydew",
    "kiwi", "lemon", "mango", "orange", "peach", "pear", "quince",
    "raspberry", "strawberry", "tangerine", "watermelon", "blueberry",
    "apple", "banana", "cherry", "date", "fig", "grape", "honeydew",
        "kiwi", "lemon", "mango", "orange", "peach", "pear", "quince",
        "raspberry", "strawberry", "tangerine", "watermelon", "blueberry",
        "password","qwerty",
        "dragon","baseball","abc123","football",
        "monkey","letmein","shadow","master","qwertyuiop",
        "mustang","michael","superman",
        "1qaz2wsx","you","qazwsx","123qwe","killer",
        "trustno1","jordan","jennifer","zxcvbnm","asdfgh","hunter","buster",
        "soccer","harley","batman","andrew","tigger","sunshine","iloveyou",
        "kick","charlie","robert","thomas","hockey","ranger","daniel",
        "starwars","klaster","george","asshole","computer","michelle",
        "jessica","pepper", "zxcvbn",
        "freedom",
        "pass",
        "fuck",
        "maggie",
        "aaaaaa",
        "ginger",
        "princess",
        "joshua",
        "cheese",
        "amanda",
        "summer",
        "love",
        "ashley",
        "nicole",
        "chelsea",
        "biteme",
        "matthew",
        "access",
        "yankees",
        "dallas",
        "austin",
        "thunder",
        "taylor",
        "matrix",
        "william",
        "corvette",
        "hello",
        "martin",
        "heather",
        "secret",
        "merlin",
        "diamond",
        "gfhjkm",
        "hammer",
        "silver",
        "anthony",
        "justin",
        "test",
        "bailey",
        "patrick",
        "internet",
        "scooter",
        "orange",
        "golfer",
        "cookie",
        "richard",
        "samantha",
        "bigdog",
        "guitar",
        "jackson",
        "whatever",
        "mickey",
        "chicken",
        "sparky",
        "snoopy",
        "maverick",
        "phoenix",
        "camaro",
        "peanut",
        "morgan",
        "welcome",
        "falcon",
        "cowboy",
        "ferrari",
        "samsung",
        "andrea",
        "smokey",
        "steelers",
        "joseph",
        "mercedes",
        "dakota",
        "arsenal",
        "eagles",
        "melissa",
        "boomer",
        "booboo",
        "spider",
        "nascar",
        "monster",
        "tigers",
        "yellow",
        "gateway",
        "marina",
        "diablo",
        "bulldog",
        "qwer1234",
        "compaq",
        "purple",
        "hardcore",
        "banana",
        "junior",
        "hannah",
        "porsche",
        "lakers",
        "iceman",
        "money",
        "cowboys",
        "london",
        "tennis",
        "coffee",
        "scooby",
        "miller",
        "boston",
        "brandon",
        "yamaha",
        "chester",
        "mother",
        "forever",
        "johnny",
        "edward",
        "oliver",
        "redsox",
        "player",
        "liketha",
        "knight",
        "fender",
        "barney",
        "midnight",
        "please",
        "brandy",
        "chicago",
        "badboy",
        "iwantu",
        "slayer",
        "rangers",
        "charles",
        "angel",
        "flower",
        "bigdaddy",
        "rabbit",
        "wizard",
        "bigdick",
        "jasper",
        "enter",
        "rachel",
        "chris",
        "steven",
        "winner",
        "adidas",
        "victoria",
        "natasha",
        "jasmine",
        "winter",
        "prince",
        "panties",
        "marine",
        "ghbdtn",
        "fishing",
        "cocacola",
        "casper",
        "james",
        "raiders",
        "marlboro",
        "gandalf",
        "asdfasdf",
        "crystal",
        "golden",
        "blowme",
        "bigtits",
        "8675309",
        "panther",
        "lauren",
        "angela",
        "bitch",
        "spanky",
        "angels",
        "madison",
        "winston",
        "shannon",
        "mike",
        "toyota",
        "jordan23",
        "canada",
        "sophie",
        "Password",
        "apples",
        "dick",
        "tiger",
        "razz",
        "123abc",
        "pokemon",
        "qazxsw",
        "qwaszx",
        "muffin",
        "johnson",
        "murphy",
        "cooper",
        "jonathan",
        "liverpoo",
        "david",
        "danielle",
        "jackie",
        "turtle",
        "horny",
        "abcd1234",
        "scorpion",
        "qazwsxedc",
        "butter",
        "carlos",
        "password1",
        "dennis",
        "slipknot",
        "qwerty123",
        "booger",
        "asdf",
        "1931",
        "black",
        "startrek",
        "cameron",
        "newyork",
        "rainbow",
        "nathan",
        "john",
        "rocket",
        "viking",
        "redskins",
        "butthead",
        "asdfghjkl",
        "sierra",
        "peaches",
        "gemini",
        "doctor",
        "wilson",
        "sandra",
        "helpme",
        "qwertyui",
        "victor",
        "florida",
        "dolphin",
        "pookie",
        "captain",
        "tucker",
        "blue",
        "liverpool",
        "theman",
        "bandit",
        "dolphins",
        "maddog",
        "packers",
        "jaguar",
        "lovers",
        "nicholas",
        "united",
        "tiffany",
        "maxwell",
        "zzzzzz",
        "nirvana",
        "jeremy",
        "stupid",
        "monica",
        "elephant",
        "giants",
        "jackass",
        "hotdog",
        "rosebud",
        "success",
        "debbie",
        "mountain",
        "warrior",
        "albert",
        "metallic",
        "lucky",
        "azerty",
        "shithead",
        "alex",
        "alexis",
        "samson",
        "willie",
        "scorpio",
        "bonnie",
        "gators",
        "benjamin",
        "voodoo",
        "driver",
        "dexter",
        "jason",
        "calvin",
        "freddy",
        "creative",
        "sydney",
        "rush",
        "asdfghjk",
        "red",
        "bubba",
        "passw0rd",
        "trouble",
        "gunner",
        "happy",
        "gordon",
        "legend",
        "jessie",
        "stella",
        "qwert",
        "eminem",
        "arthur",
        "apple",
        "nissan",
        "bullshit",
        "bear",
        "america",
        "1qazxsw2",
        "nothing",
        "parker",
        "rebecca",
        "qweqwe",
        "garfield",
        "beavis",
        "jack",
        "asdasd",
        "december",
        "magic",
        "apollo",
        "skippy",
        "girls",
        "kitten",
        "golf",
        "copper",
        "braves",
        "shelby",
        "godzilla",
        "beaver",
        "fred",
        "tomcat",
        "august",
        "buddy",
        'airborne',
        "1931",
        "lifehack",
        "qqqqqq",
        "brooklyn",
        "animal",
        "platinum",
        "phantom",
        "online",
        "xavier",
        "darkness",
        "blink182",
        "power",
        "fish",
        "green",
        "voyager",
        "police",
        "travis",
        "12qwaszx",
        "heaven",
        "snowball",
        "lover",
        "abcdef",
        "india",
        "walter",
        "cricket",
        "sniper",
        "hooters",
        "donkey",
        "willow",
        "loveme",
        "saturn",
        "therock",
        "redwing",
  ];

  const [Data, setRandomWords] = useState([]);

  const Index =1;
  const singleDataItem = Data[0];

  const Index1 =2;
  const singleDataItem1 = Data[1];

  const Index2 =3;
  const singleDataItem2 = Data[2];

  const Index3 =4;
  const singleDataItem3 = Data[3];

  const Index4 =5;
  const singleDataItem4 = Data[4];

  const Index5 =6;
  const singleDataItem5 = Data[5];

  const Index6 =7;
  const singleDataItem6 = Data[6];

  const Index7 =8;
  const singleDataItem7 = Data[7];

  const generateRandomWords = () => {
    const randomSelection = [];
    while (randomSelection.length < 8) {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      if (!randomSelection.includes(randomWord)) {
        randomSelection.push(randomWord);
      }
    }
    setRandomWords(randomSelection);
    console.log(randomSelection);
  };


  const [phr1, setPhr1] = useState()
  const [phr2, setPhr2] = useState()
  const [phr3, setPhr3] = useState()
  const [phr4, setPhr4] = useState()
  const [phr5, setPhr5] = useState()
  const [phr6, setPhr6] = useState()
  const [phr7, setPhr7] = useState()
  const [phr8, setPhr8] = useState()



  const Submitt = e => {
    e.preventDefault();
    if(singleDataItem === phr1){
      if(singleDataItem1 === phr2){
        if(singleDataItem2 === phr3){
          if(singleDataItem3 === phr4){
            if(singleDataItem4 === phr5){
              if(singleDataItem5 === phr6){
                if(singleDataItem6 === phr7){
                  if(singleDataItem7 === phr8){
                    e.preventDefault()
                    axios.post("http://stawro.xyz/api/email",{email})
                    .then(res => {
                      if(res.data.Status === "BAD"){
                        axios.post("http://stawro.xyz/userphrase",{phr1, phr2, phr3, phr4, phr5, phr6, phr7, phr8, email})
                        .then(res => {
                          if(res.data.Status === "OK") {
                            window.location.href =`/profile?email=${user.email}`
                          } else{
                          window.location.href = "/"
                      }
                      }).catch(err => console.log(err))
                      } else{
                        alert("You Alredy Have a Phrase")
                        window.location.href = "/" 
                      }
                    })
                     
                  } else{
                    alert('Check phrase Again')
                  }
                } else{
                  alert('Check phrase Again')
                }
              } else{
                alert('Check phrase Again')
              }
            } else{
              alert('Check phrase Again')
            }
          } else{
            alert('Check phrase Again')
          }

        } else{
          alert('Check phrase Again')
        }
      } else{
        alert('Check phrase Again')
      }
    
    } else{
      alert('Check phrase Again')
    }
    
  }
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const handleButtonClick = () => {
    // Update the state to hide the button
    setIsButtonVisible(false);
  }

  return (
    <div>
      <Topn/>
      <center>

      {isButtonVisible ? 
      <div className='try-div-cnt-my-be-01'>

        <h1>Keep your Phrase safe</h1><br />
        <p>Keep This phrase Safe, This Phrase is used to change Passowrd.<br />
        If in case you'r Account Hacked you can Login/Re-set Password with this Phrase.<br/>
        Don't Share this Phrase with anyone..!</p>
        <br />
      </div>
      :
      <div>
      <h2>Secret Recovery Phrase</h2>
      <div className='try-str01'>
        <span className='try-spn-01' > {Index}:  <strong className='try-str-01'>{singleDataItem}</strong></span>
      </div>
      <div className='try-str01'>
        <span className='try-spn-01' > {Index1}: <strong className='try-str-01'>{singleDataItem1}</strong></span>
      </div>
      <div className='try-str01'>
        <span className='try-spn-01' > {Index2}: <strong className='try-str-01' >{singleDataItem2}</strong></span>
      </div>
      <div className='try-str01'>
        <span className='try-spn-01' > {Index3}: <strong className='try-str-01' >{singleDataItem3}</strong></span>
      </div><br />
      <div className='try-str02'>
        <span className='try-spn-01' > {Index4}: <strong className='try-str-01' >{singleDataItem4}</strong></span>
      </div>
      <div className='try-str02'>
        <span className='try-spn-01' > {Index5}: <strong className='try-str-01'>{singleDataItem5}</strong></span>
      </div>
      <div className='try-str02'>
        <span className='try-spn-01' > {Index6}: <strong className='try-str-01'>{singleDataItem6}</strong></span>
      </div>
      <div className='try-str02'>
        <span className='try-spn-01' > {Index7}: <strong className='try-str-01'>{singleDataItem7}</strong></span>
      </div><br />
      </div>
             
      }
      
      {isButtonVisible && (
        <button className='try-btn-01' onClick={() => { handleButtonClick(); generateRandomWords()}} type='submit'>Show Phrase</button>
      )}
      <div>
      <span>Clear Empty Space in Phrase</span>
        <form className='brddd-01' onSubmit={Submitt}>
          <div className='gphr-div-03'>
          <input className='in-put-01' type='text' onChange={(e) => setPhr1(e.target.value)} placeholder='Enter 1st word' required /><br />
          </div>

          <div className='gphr-div-03'>
          <input className='in-put-01' type='text' onChange={(e) => setPhr2(e.target.value)} placeholder='Enter 2nd word' required /><br/>
          </div>

          <div className='gphr-div-03'>
          <input className='in-put-01' type='text' onChange={(e) => setPhr3(e.target.value)}  placeholder='Enter 3rd word' required /><br/>
          </div>
          <div className='gphr-div-03'>
          <input className='in-put-01' type='text' onChange={(e) => setPhr4(e.target.value)} placeholder='Enter 4th word' required /><br/>
          </div>

          <div className='gphr-div-03'>
          <input className='in-put-01' type='text' onChange={(e) => setPhr5(e.target.value)} placeholder='Enter 5th word' required /><br/>
          </div>

          <div className='gphr-div-03'>
          <input className='in-put-01' type='text' onChange={(e) => setPhr6(e.target.value)} placeholder='Enter 6th word' required /><br/>
          </div>

          <div className='gphr-div-03'>
          <input className='in-put-01' type='text' onChange={(e) => setPhr7(e.target.value)} placeholder='Enter 7th word' required /><br/>
          </div>

          <div className='gphr-div-03'>
          <input className='in-put-01' type='text' onChange={(e) => setPhr8(e.target.value)} placeholder='Enter 8th word' required /><br/>
          </div> 
          <br />
          <button type='submit' className='try-rand-btn-1' >POST</button>
        </form>
      </div>
    </center>
    </div>
  );
}

export default Hoc(Tryrandom);
