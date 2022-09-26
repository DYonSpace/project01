import {Link} from 'react-router-dom';


function MoreInfo({setShowClause, setShowPolicy}){


    return(
        <div className="Info">
            <h1>MORE</h1>
            <p>
                <Link to="#" onClick={()=>{
                    setShowClause(true);
                }}>이용약관</Link><br/>
                <Link to="#" onClick={()=>{
                    setShowPolicy(true);
                }}>개인정보처리방침</Link><br/>
                <Link to="#">고객센터1:1문의(운영중단)</Link><br/>
            </p>
        </div>
    );
} export default MoreInfo;