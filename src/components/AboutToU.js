import { Link } from "react-router-dom";


function AboutToU(){
    

    return(
        <div className="Info">
            <h1>ABOUT ToU</h1>
            <p>
                <Link to="./about">ToU를 소개합니다.</Link><br/>
                <Link to="#">ToU는 채용중</Link><br/>
                <Link to="#">협업문의</Link><br/>
            </p>
        </div>
    );
} export default AboutToU;