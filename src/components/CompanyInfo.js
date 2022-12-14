import { useNavigate } from 'react-router-dom';

function CompanyInfo(){

    let navigate = useNavigate();

    return(
        <div className="Info">
            <h1>COMPANY</h1>
            <p>
                <span>(주)투유 Owner 이요니</span>
                <span>·Business License:012-34-56789</span>
                <span>·Address:서울시 중구 청계천로 1004, 1004호</span>
                <span>·Phone:070-1234-5678</span>
                <span>·Email:contact@2u.net</span>
                <span>·Mail Order License:2022-아산배방-0923</span>
                <span className='bInfo' onClick={()=>{navigate("./businessInfo")}}>[사업자정보확인]</span>
            </p>
        </div>
    );
} export default CompanyInfo;