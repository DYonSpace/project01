import {Link} from 'react-router-dom';


function MoreInfo({setShowClause, setShowPolicy}){


    return(
        <div className="Info">
            <h1>MORE</h1>
            <p>
                <span>
                    <Link to="#" onClick={()=>{ setShowClause(true); }}>이용약관</Link>
                </span>
                <span>
                    <Link to="#" onClick={()=>{ setShowPolicy(true); }}>개인정보처리방침</Link>
                </span>
                <span>
                    <Link to="#">고객센터1:1문의(운영중단)</Link>
                </span>
            </p>
        </div>
    );
} export default MoreInfo;