import { Link } from "react-router-dom";

function CompanyInfo(setTabIndex){

    return(
        <div className="Info">
            <h1>COMPANY</h1>
            <p className="companyInfo">
                (주)투유 Owner 이요니<br/>
                ·Business License:012-34-56789<br/>
                ·Address:서울시 중구 청계천로 1004, 1004호<br/>
                ·Phone:070-1234-5678<br/>
                ·Email:contact@2u.net<br/>
                ·Mail Order License:2022-아산배방-0923<br/>
                <a target='_blank' href="./businessInfo">[사업자정보확인]</a>
            </p>
        </div>
    );
} export default CompanyInfo;