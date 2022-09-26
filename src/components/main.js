import './css/main.css';
import { Outlet } from 'react-router-dom';
import MainSlide1 from './mainSlide1';
import MainSlide2 from './mainSlide2';


function Main(){

    return(
        <div className="Main">
            <header className="mainHeader">
            <h1>ToU. Goodbye 2022!</h1>
            <h3>#2022 낼나다이어리 30% 할인!</h3>
            </header>
            <section className="mainSection1">
            <MainSlide1/>
            </section>
            <section className="mainSection2">
            <h1>ToU. 2Uclub beta OPEN!</h1>
            <h3>#2U클럽beta open기념 10월 얼리버드 할인!</h3>
            </section>
            <section className="mainSection3">
            <MainSlide2/>
            </section>
            <Outlet/>
        </div>
    );
} export default Main;