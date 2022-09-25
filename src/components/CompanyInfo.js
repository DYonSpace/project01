import { Link } from "react-router-dom";

function CompanyInfo(setTabIndex){

    return(
        <div className="Info">
            <h1>COMPANY</h1>
            <p>
                (주)투유 Owner 이요니<br/>
                ·Business License:012-34-56789<br/>
                ·Address:서울시 중구 청계천로 1004, 1004호<br/>
                ·Phone:070-1234-5678<br/>
                ·Email:contact@toyou.net<br/>
                ·Mail Order License:2022-서울중구-0923<br/>
                <Link to="./info" onClick={()=>{setTabIndex(4)}}>[사업자정보확인]</Link>
            </p>
        </div>
    );
} export default CompanyInfo;