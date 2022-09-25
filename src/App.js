import './App.css';
import BackMovie from './components/backMovie';
import {useState} from 'react';
import Login from './components/login';
import {Routes, Route, useNavigate} from 'react-router-dom';
import ToU from './components/toU';
import About from './components/about';
import Shop from './components/shop';
import Club from './components/club';
import Join from './components/join';
import Business from './components/Business';
import Main from "./components/main";
import ShopItemDetail from './components/shopItemDetail';


function App() {


  let navigate = useNavigate();

  let [userData, setUserData] = useState([
    {id:"dancingfrog.lee@gmail.com",
    pw:"aa1122aa.",
    name:"DYon"}
    ]);
  let [userName, setUserName] = useState("");


  return(
    <div className="App">
      <Routes>
        <Route path="/" element={
            
          <div className="bgV" onClick={()=>{
            navigate("login");
            console.log('저장된 userData')
            console.log(userData);
          }}>
            <BackMovie/>
            <div className='vText'>            
            <p>For better tomorrow</p>            
            </div>
          </div>
        }>
        </Route>
        <Route path='/login' element={
          <Login userName={userName} setUserName={setUserName} setUserData={setUserData} userData={userData}/>}/>
        <Route path='/join' element={<Join userName={userName} setUserName={setUserName} userData={userData} setUserData={setUserData}/>}/>
        <Route path='/toU' element={<ToU userName={userName} userData={userData}/>} >
                <Route path="" element={<Main/>} />
                <Route path="about" element={<About/>}/>
                <Route path="club" element={<Club/>}/>
                <Route path="shop" element={<Shop/>}>
                  <Route path="product/:id" element={<ShopItemDetail/>}/>
                </Route>
                <Route path="info" element={<Business/>}/>
        </Route>
    </Routes>
    </div>
  )
}

export default App;
