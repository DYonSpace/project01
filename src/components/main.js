import './css/main.css';
import { Outlet, useNavigate } from 'react-router-dom';
import MainSlide1 from './mainSlide1';
import MainSlide2 from './mainSlide2';
import BackMovie from './backMovie';


function Main(){

    let navigate = useNavigate();

    return(
        <div className="Main">
            <header className='mainHeader'>
                <div className="bgV">
                    <BackMovie/>
                <div className='vText2'>
                    <p className='p1'>For better tomorrow</p>
                    <p className='p2' onClick={()=>{
                        navigate('./about')
                    }}>more about toU.</p>
                </div>
                </div>
            </header>
            <section className="mainSection1">
                <h1>ToU. Goodbye 2022!</h1>
                <h3>#2022 낼나다이어리 30% 할인!</h3>
            </section>
            <section className="mainSection2">
                <MainSlide1/>
            </section>
            <section className="mainSection3">
                <h1>ToU. 2Uclub beta OPEN!</h1>
                <h3>#2U클럽beta open기념 10월 얼리버드 할인!</h3>
            </section>
            <section className="mainSection4">
                <MainSlide2/>
            </section>
                <Outlet/>
        </div>
    );
} export default Main;