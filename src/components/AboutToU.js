import { Link } from "react-router-dom";


function AboutToU(){
    

    return(
        <div className="Info">
            <h1>ABOUT ToU</h1>
            <p>
                <Link to="./about">ToU를 소개합니다.</Link><br/>
                <a target='_blank' href="https://team2u.notion.site/Today-Do-Your-Best-ToU-9445e2ba617b485993f4b8bf088c9d33">ToU는 채용중</a><br/>
                <a target='_blank' href="https://team2u.notion.site/15a8095ba6f34e3cae5e8e42ab6b2942">협업문의</a><br/>
            </p>
        </div>
    );
} export default AboutToU;