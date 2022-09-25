import {Link} from 'react-router-dom';

function MoreInfo(){

    return(
        <div className="Info">
            <h1>MORE</h1>
            <p>
                <Link to="#">이용약관</Link><br/>
                <Link to="#">개인정보처리방침</Link><br/>
                <Link to="#">고객센터1:1문의하기</Link><br/>
            </p>
        </div>
    );
} export default MoreInfo;